"use client";

import ColorSelecting from './ColorSelecting'
import SizeSelecting from './SizeSelecting'
import Counter from './Counter'
import { UserAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import { Product } from '@/utils/types';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store';
import { useEffect } from 'react';
import { setItem } from '@/store/cartSlice';
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { db } from '@/utils/firebase';

const ProductOptions = ({ product }: { product: Product }) => {
    const item = useSelector((state: RootState) => state.cart.item);

    const dispatch = useDispatch();

    const { user } = UserAuth();

    const router = useRouter();

    const handleAddToCart = async () => {
        if (!user) {
            router.push("/login");
        } else {
            // Add to cart logic..
            try {
                console.log(`Attemping to add to cart...`);
                const cartDocRef = doc(db, "userCart", user.uid);
                const cartDocSnap = await getDoc(cartDocRef);

                if (cartDocSnap.exists()) {
                    console.log(`Document exists, updating...`);
                    await updateDoc(cartDocRef, {
                        items: [...cartDocSnap.data().items, item]
                    })
                } else {
                    console.log(`Dcoument does not exist, creating...`);
                    await setDoc(cartDocRef, {
                        items: [item]
                    })
                }
            } catch (error) {
                console.log(`Error adding to cart: ${error}`);
            }
        }
    }

    useEffect(() => {
        if (product) {
            dispatch(setItem({ ...item, id: product.id, color: product.colors ? product.colors[0] : "#000", size: product.sizes ? product.sizes[1] : "medium", product }));
        }
    }, [product, dispatch]);

    return (
        <section className="product-options box full-width">
            <ColorSelecting productColors={product.colors} />
            <SizeSelecting productSizes={product.sizes} />

            <div className="count">
                <h3>Add To Cart</h3>

                <div className="box small-gap">
                    <Counter productMaxQuantity={product.maxQuantity} />
                    <button onClick={handleAddToCart} className='full-width rounded btn'>Add To Cart</button>
                </div>
            </div>
        </section>
    )
}

export default ProductOptions;


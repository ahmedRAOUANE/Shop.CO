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
import { addProductToCart } from '@/utils/getData';

const ProductOptions = ({ product }: { product: Product }) => {
    const item = useSelector((state: RootState) => state.cart.item);

    const dispatch = useDispatch();

    const { user } = UserAuth();

    const router = useRouter();

    const handleAddToCart = async () => {
        if (!user) {
            router.push("/login");
        } else {
            await addProductToCart(user.uid, item);
        }
    }

    useEffect(() => {
        if (product) {
            dispatch(setItem(
                {
                    ...item,
                    id: product.id,
                    color: product.colors ? product.colors[0] : "#000",
                    size: product.sizes ? product.sizes[1] : "medium",
                    product
                }
            ));
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


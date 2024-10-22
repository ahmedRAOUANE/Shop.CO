"use client";

import ColorSelecting from './ColorSelecting'
import SizeSelecting from './SizeSelecting'
import Counter from './Counter'
import { UserAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';

const ProductOptions = () => {
    const { user } = UserAuth();

    const router = useRouter();

    const handleAddToCart = async () => {
        if (!user) {
            router.push("/login");
        } else {
            // Add to cart logic..
        }
    }

    return (
        <div className="box full-width">
            <ColorSelecting />
            <SizeSelecting />

            <div className="count">
                <h3>Add To Cart</h3>

                <div className="box small-gap">
                    <Counter />
                    <button onClick={handleAddToCart} className='full-width rounded btn'>Add To Chart</button>
                </div>
            </div>
        </div>
    )
}

export default ProductOptions;


"use client";

import { CartItem } from '@/utils/types'
import ProductCard from './ProductCard'
import CartActionsBtns from './CartActionsBtns'
import useCheckCartChanges from '@/hooks/useCheckCartChanges';

const CartProducts = ({ initialItems, userId }: { initialItems: CartItem[], userId: string }) => {
    const { items } = useCheckCartChanges(userId, initialItems);

    return (
        <div className="card-group box column outline paper full-width">
            {items.length > 0 ? (
                <>
                    {
                        items.map(({ product, quantity, id }) => (
                            <div key={id} className="card-container box nowrap full-width">
                                <ProductCard productData={product} className="ai-start" />
                                <CartActionsBtns userId={userId} productId={id} quantity={quantity} />
                            </div>
                        ))
                    }
                </>
            ) : (
                <div>No products in cart</div>
            )}
        </div>
    )
}

export default CartProducts;


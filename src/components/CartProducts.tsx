"use client";

import { CartItem } from '@/utils/types'
import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import CartActionsBtns from './CartActionsBtns'
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '@/utils/firebase';
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
                                <CartActionsBtns userId={userId} productId={id} quantity={quantity} product={product} />
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


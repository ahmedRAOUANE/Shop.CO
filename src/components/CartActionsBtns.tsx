"use client";

import { deleteProductFromCart } from '@/utils/getData'
import { Product } from '@/utils/types'
import React from 'react'
import { MdDelete } from 'react-icons/md'

const CartActionsBtns = ({ userId, productId, quantity, /*product*/ }: { userId: string, productId: number, quantity: number, /*product?: Product*/ }) => {
    
    return (
        <div className="box column ai-end">
            <button className="icon danger" onClick={() => deleteProductFromCart(userId, productId.toString())}>
                <MdDelete />
            </button>

            <div className="box small">
                {quantity}
            </div>

            {/* 
            * this counter have added for the mext version feature to add the ability 
            *   to decreaseand increase the product quantity directly from the cart 
            */}

            {/* <Counter productMaxQuantity={product.maxQuantity} quantity={quantity} /> */}
        </div>
    )
}

export default CartActionsBtns
"use client";

import { RootState } from '@/store';
import { setItem } from '@/store/cartSlice';
import React, { useState } from 'react'
import { FiMinus, FiPlus } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';

const Counter = ({ productMaxQuantity }: { productMaxQuantity: number | undefined }) => {
    const cartItem = useSelector((state: RootState) => state.cart.item);

    const dispatch = useDispatch();

    const [quantity, setquantity] = useState(1);

    const increase = () => {
        if (quantity < (productMaxQuantity || 5)) { // limited by products productMaxQuantity or 5 if undefined
            setquantity(prev => prev += 1);
            dispatch(setItem({ ...cartItem, quantity}));
        }
    }
    
    const decrease = () => {
        if (quantity >= 1) {
            setquantity(prev => prev -= 1);
            dispatch(setItem({ ...cartItem, quantity}));
        }
    }

    return (
        <div className="small box small-gap">
            <button className="icon box" onClick={decrease}>
                <FiMinus />
            </button>
            <span>{quantity}</span>
            <button className="icon box" onClick={increase}>
                <FiPlus />
            </button>
        </div>
    )
}

export default Counter
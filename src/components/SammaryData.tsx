"use client";

import useCheckCartChanges from '@/hooks/useCheckCartChanges';
import { CartItem } from '@/utils/types';
import React from 'react'

const SammaryData = ({ initialItems, userid }: { initialItems: CartItem[], userid : string}) => {
    const { items } = useCheckCartChanges(userid, initialItems);
    
    const subtotal = items.reduce((acc, item) => acc + (item.quantity * item.product.price), 0);

    /**
     * the used Data are static data to handle the logic, its been used because the database doesn't
     *   provid these data
     * 
     * @param {number} discount - the discount percentage
     * @param {number} deliveryFee - the delivery fee
     */

    const discount = 10;
    const deliveryFee = 5;

    const total = subtotal - discount + deliveryFee;
    
    return (
        <>
            <div className="box full-width">
                <strong>Subtotal</strong>
                <span>${subtotal}</span>
            </div>

            <div className="box full-width">
                <strong>Discout</strong>
                <span>${discount}</span>
            </div>

            <div className="box full-width">
                <strong>Delivery Fee</strong>
                <span>${deliveryFee}</span>
            </div>

            <hr className="full-width" />

            <div className="box full-width">
                <strong>Total</strong>
                <span>${total}</span>
            </div>
        </>
    )
}

export default SammaryData
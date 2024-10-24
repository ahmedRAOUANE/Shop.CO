"use client";

import useCheckCartChanges from '@/hooks/useCheckCartChanges';
import { CartItem } from '@/utils/types'
import Link from 'next/link'
import { BsFillTagFill } from 'react-icons/bs'
import { FaArrowRightLong } from 'react-icons/fa6'

const CartConfirmBtns = ({ initialItems, userId }: { initialItems: CartItem[], userId: string }) => {
    const { items } = useCheckCartChanges(userId, initialItems);

    return (
        <div className="box column small-gap full-width">
            <div className="box full-width">
                <div className="small box small-gap full-width nowrap">
                    <BsFillTagFill />
                    <input type="text" placeholder="Add Promo Code" />
                </div>

                <button className={`rounded ${items.length === 0 && "disabled"}`}>Apply</button>
            </div>

            <Link href={`/checkout/${userId}`} className={`btn rounded full-width box center-x center-y ${items.length === 0 && "disabled"}`}>
                <span>Go To Checkout</span>
                <FaArrowRightLong />
            </Link>
        </div>
    )
}

export default CartConfirmBtns
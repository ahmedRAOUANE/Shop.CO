import { Product } from '@/utils/types'
import React from 'react'

const CardPrice = ({ data }: { data: Product }) => {
    return (
        <div className="card-price box small-gap jc-start">
            {data.discount ? (
                <>
                    <strong>${data.discount.newPrice}</strong>
                    <strong className='depricated'>${data.discount.oldPrice}</strong>
                    <span className='small'>-{data.discount.persontage}%</span>
                </>
            ) : (
                <strong>${data.price}</strong>
            )}
        </div>
    )
}

export default CardPrice
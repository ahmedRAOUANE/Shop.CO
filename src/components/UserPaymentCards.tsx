"use client";

import React, { useState } from 'react'
import { FaPlus } from 'react-icons/fa';

import visaImg from '@/assets/Badge-5.png';
import Image from 'next/image';

// dummy data for building the UI
const userCards = [
    {
        name: "Visa ending in 1234",
        image: visaImg,
        isActive: true,
        expireDate: "12/24"
    },
    {
        name: "Visa ending in 1234",
        image: visaImg,
        isActive: false,
        expireDate: "12/24"
    },
]

const UserPaymentCards = () => {
    const [currentActiveCard, setCurrentActiveCard] = useState(0);

    return (
        <section className="paper outline box column full-width ai-start">
            <div className="box full-width">
                <div className="box column small-gap">
                    <h3 className='disable-guitters full-width'>Payment Methodes</h3>
                    <p>select the card you want to use</p>
                </div>

                <button className="icon" title='Add a new card'>
                    <FaPlus />
                </button>
            </div>

            <div className="box ai-start jc-start small-gap">
                {
                    userCards.map((card, idx) => (
                        <div 
                            onClick={() => setCurrentActiveCard(idx)} 
                            className={`paper box small-gap outline btn primary ${idx === currentActiveCard ? "active" : ""}`} 
                            key={card.name}
                            title='use this card for the next payment'
                        >
                            <Image src={card.image} alt={""} />
                            <div className="box column small-gap ai-start jc-start">
                                <strong>{card.name}</strong>
                                <small>{card.expireDate}</small>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default UserPaymentCards
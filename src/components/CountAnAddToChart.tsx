"use client";

import { useState } from 'react';
import { FiMinus, FiPlus } from 'react-icons/fi'

const CountAnAddToChart = () => {
    const [count, setCount] = useState(0);

    const increase = () => {
        if (count < 5) {
            setCount(prev => prev += 1); // limited by products count
        }
    }

    const decrease = () => {
        if (count > 0) {
            setCount(prev => prev -= 1);
        }
    }

    return (
        <div className="count">
            <h3>Add To Chart</h3>

            <div className="box small-gap">
                <div className="small box small-gap">
                    <button className="icon" onClick={decrease}>
                        <FiMinus />
                    </button>
                    <span>{count}</span>
                    <button className="icon" onClick={increase}>
                        <FiPlus />
                    </button>
                </div>

                <button className='full-width rounded'>Add To Chart</button>
            </div>
        </div>
    )
}

export default CountAnAddToChart
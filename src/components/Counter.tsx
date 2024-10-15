"use client";

import React, { useState } from 'react'
import { FiMinus, FiPlus } from 'react-icons/fi';

const Counter = () => {
    const [count, setCount] = useState(1);

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
        <div className="small box small-gap">
            <button className="icon box" onClick={decrease}>
                <FiMinus />
            </button>
            <span>{count}</span>
            <button className="icon box" onClick={increase}>
                <FiPlus />
            </button>
        </div>
    )
}

export default Counter
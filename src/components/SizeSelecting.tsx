"use client";

import { useState } from "react";

const SizeSelecting = () => {
    const [selectedSize, setSelectedSize] = useState('Medium');

    const availableSizes = ['Small', 'Medium', 'Large', 'X-Large']; // change depends on the available sizes

    const handleSizeClick = (size: string) => {
        setSelectedSize(size);
    }

    return (
        <div className="sizes">
            <h3>Chooze Size</h3>
            <div className="btn-group box small-gap">
                {availableSizes.map((size, idx) => (
                    <button
                        key={idx}
                        className={`rounded ${selectedSize === size && "active"}`}
                        onClick={() => handleSizeClick(size)}
                    >
                        {size}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default SizeSelecting


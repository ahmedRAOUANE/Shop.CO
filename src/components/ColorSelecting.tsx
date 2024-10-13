"use client";

import { useState } from "react";
import { FaCheck } from "react-icons/fa";

const ColorSelecting = () => {
    const availableColors = ["#000", "rgb(240, 240, 240)", "hsl(0, 0%, 46%)"]; // change fepends on the available colors, the colors van be with any format

    const [selectedColor, setSelectedColor] = useState(availableColors[0]);

    const handleChangeColor = (color: string) => {
        setSelectedColor(color);
    }

    return (
        <div className="colors">
            <h3>Select Color</h3>
            <div className="box">
                {availableColors.map((color, idx) => (
                    <button
                        key={idx}
                        className="color icon box center-x center-y"
                        style={{ backgroundColor: color }}
                        onClick={() => handleChangeColor(color)}
                    >
                        {color === selectedColor && (<FaCheck />)}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default ColorSelecting
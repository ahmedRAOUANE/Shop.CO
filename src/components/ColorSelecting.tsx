"use client";

import { RootState } from "@/store";
import { setItem } from "@/store/cartSlice";
import { CartItem } from "@/utils/types";
import { FaCheck } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

/**
 * @param param {Object} productColors - the list of colors available for the product
 * @param avilableColors - the other value is a placeholder, needed because the api doesn't provide 
 *   mutiple colors for the product
 */

const ColorSelecting = ({ productColors }: { productColors: CartItem["product"]["colors"] }) => {
    const cartItem = useSelector((state: RootState) => state.cart.item);

    const dispatch = useDispatch();

    const availableColors = productColors || ["#000", "rgb(240, 240, 240)", "hsl(0, 0%, 46%)"];

    const selectedColor = cartItem?.color || availableColors[0];

    const handleChangeColor = (color: string) => {
        dispatch(setItem({ ...cartItem, color }));
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

export default ColorSelecting;


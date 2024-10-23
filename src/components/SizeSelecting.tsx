"use client";

import { RootState } from "@/store";
import { setItem } from "@/store/cartSlice";
import { useDispatch, useSelector } from "react-redux";

/**
 * @param param {Object} productSizes - the list of sizes available for the product
 * @param availableSizes - the other value is a placeholder, needed because the api doesn't provide 
 *   mutiple sizes for the product
 */

const SizeSelecting = ({ productSizes }: { productSizes: string[] | undefined }) => {
    const cartItem = useSelector((state: RootState) => state.cart.item);

    const dispatch = useDispatch();

    const availableSizes = productSizes || ['Small', 'Medium', 'Large', 'X-Large'];

    const selectedSize = cartItem?.size?.toLocaleLowerCase() || availableSizes[1].toLocaleLowerCase();

    const handleSizeClick = (size: string) => {
        dispatch(setItem({ ...cartItem, size }));
    }

    return (
        <div className="sizes">
            <h3>Size</h3>
            <div className="btn-group box small-gap">
                {availableSizes.map((size, idx) => (
                    <button
                        key={idx}
                        className={`rounded ${selectedSize === size.toLocaleLowerCase() && "active"}`}
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


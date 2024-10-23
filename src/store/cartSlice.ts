import { CartItem } from "@/utils/types";
import { createSlice } from "@reduxjs/toolkit";

/**
 * this slice used to store the data from separate client components 
 *    to push it to the server
 */

interface CartState {
    item: CartItem;
}

const initialState: CartState = {
    item: {
        id: 0,
        quantity: 1,
        color: "#000",
        size: "medium",
        product: {
            id: 0,
            title: "",
            price: 0,
            description: "",
            category: "",
            image: "",
            images: [],
            rating: {
                rate: 0,
                count: 0
            }
        }
    }
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        setItem: (state, action: { type: string, payload: CartItem }) => { // payload is the data from the client component
            state.item = action.payload
        }
    }
})

export const { setItem } = cartSlice.actions;
export default cartSlice


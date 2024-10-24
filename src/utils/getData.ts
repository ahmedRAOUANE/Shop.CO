import { deleteDoc, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "./firebase";
import { CartItem, Product } from "./types";

export const getSingleProduct = async (productId: string) => {
    // dummy product from fakestore API
    const productRes = await fetch(`https://fakestoreapi.com/products/${productId}`);
    return await productRes.json();
}

export const getProducts = async (limit: number) => {
    // dummy data from fakestore API
    const productsRes = await fetch(`https://fakestoreapi.com/products?limit=${limit}`);
    return await productsRes.json();
}

export const getComments = async () => {
    // dummy comments from jsonplaceholder api
    const commentsRes = await fetch("https://jsonplaceholder.typicode.com/comments?_limit=5");
    return await commentsRes.json();
}

export const addProductToCart = async (userId: string, product: CartItem) => {
    try {
        const cartDocRef = doc(db, "userCart", userId);
        const cartDocSnap = await getDoc(cartDocRef);

        if (cartDocSnap.exists()) {
            await updateDoc(cartDocRef, {
                items: [...cartDocSnap.data().items, product]
            })
        } else {
            await setDoc(cartDocRef, {
                items: [product]
            })
        }
    } catch (error) {
        console.log(`Error adding to cart: ${error}`);
    }
}

export const getProductsFromCart = async (userId: string) => {
    try {
        const cartDocRef = doc(db, "userCart", userId);
        const cartDocSnap = await getDoc(cartDocRef);

        if (cartDocSnap.exists()) {
            return cartDocSnap.data().items
        };
    } catch (error) {
        console.log(`Error getting products from cart: ${error}`);
    }
    return [];
}

export const deleteProductFromCart = async (userId: string, productId: string) => {
    try {
        if (userId) {
            // delete the specified product from the cart
            const cartData = await getProductsFromCart(userId);
            const newCartData = cartData.filter((product: Product) => product.id.toString() !== productId);

            const cartDocRef = doc(db, "userCart", userId);
            await updateDoc(cartDocRef, {
                items: newCartData
            })
        }
    } catch (error) {
        console.log(`Error deleting product from cart: ${error}`);
    }
}
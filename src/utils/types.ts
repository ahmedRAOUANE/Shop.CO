import { User } from "firebase/auth"

export type Product = {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    rating: {
        rate: number,
        count: number
    },
    discount?: {
        persontage: number,
        oldPrice: number,
        newPrice: number,
    },
    images: []
}

export type Comment = {
    postId: number,
    id: number,
    name: string,
    email: string,
    body: string
}

export type AuthContextType = {
    user: User | null,
    signInWithGoogle: () => Promise<void>,
    signout: () => Promise<void>,
}


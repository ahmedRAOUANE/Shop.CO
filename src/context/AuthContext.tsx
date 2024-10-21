"use client";

import { logout } from "@/utils/auth";
import { auth } from "@/utils/firebase";
import { AuthContextType } from "@/utils/types";
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, User } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext<AuthContextType | null>(null);

/**
 * Provides authentication context to its children components.
 * 
 * This component manages the authentication state and provides 
 * methods for signing in with Google and signing out.
 * 
 * It uses Firebase Authentication to handle user authentication
 * and updates the user state accordingly when the authentication
 * state changes.
 * 
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The children components that will
 *        have access to the authentication context.
 * 
 * @returns {JSX.Element} The AuthContext.Provider with the authentication
 *          context values.
 */

export const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);

    const signInWithGoogle = async () => {
        const provider = new GoogleAuthProvider();

        try {
            await signInWithPopup(auth, provider);
        } catch (err) {
            console.log(`Error Logging in With Google: ${err}`);
        }
    }

    const signout = async () => {
        await logout();
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        })

        return () => unsubscribe();
    }, []);

    return (
        <AuthContext.Provider value={{ user, signInWithGoogle, signout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const UserAuth = (): AuthContextType => {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error('useUserAuth must be used within an AuthContextProvider');
    }

    return context;
}


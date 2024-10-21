import { signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth/web-extension"
import { auth } from "./firebase";

export const LoginWithGoogle = async () => {
    const provider = new GoogleAuthProvider();

    try {
        await signInWithPopup(auth, provider);
    } catch (err) {
        console.log(`Error Logging in With Google: ${err}`);
    }
}

export const login = async (credentials: { email: string, password: string }) => {
    try {
        await signInWithEmailAndPassword(auth, credentials.email, credentials.password);
    } catch (err) {
        console.log(`Error Logging in: ${err}`);
    }
}

export const signup = async (credentials: { email: string, password: string, username: string }) => {
    try {
        await createUserWithEmailAndPassword(auth, credentials.email, credentials.password);
    } catch (err) {
        console.log(`Error signing up: ${err}`);
    }
}

export const logout = async () => {
    try {
        await auth.signOut();
    } catch (err) {
        console.log(`Error logging out: ${err}`);
    }
}


"use client";

import { UserAuth } from '@/context/authContext';
import { signup } from '@/utils/auth';
import Link from 'next/link';
import React, { useRef } from 'react';

const SignUp = () => {

    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const usernameRef = useRef<HTMLInputElement>(null);

    const { signInWithGoogle } = UserAuth();

    const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // signup logic...
        if (!emailRef.current?.value || !passwordRef.current?.value || !usernameRef.current?.value) return

        try {
            const creadencials = {
                email: emailRef.current?.value,
                password: passwordRef.current?.value,
                username: usernameRef.current?.value
            }

            await signup(creadencials);
        } catch (error) {
            console.log(`Error logging in: ${error}`);
        }
    }

    return (
        <main className='auth container box column center-x center-y'>
            <div className="paper box column outline">
                <h1>Signup</h1>

                <form className="box column" onSubmit={handleSignup}>
                    <input ref={usernameRef} className='rounded full-width outline' type="text" name="username" id="username" placeholder='username' />
                    <input ref={emailRef} className='rounded full-width outline' type="email" name="userEmail" id="userEmail" placeholder='Enter Email' />
                    <input ref={passwordRef} className='rounded full-width outline' type="password" name="password" id="password" placeholder='Password' />
                    <input className='rounded btn full-width outline' type="submit" value="Sign up" />
                </form>

                <div className="or box center-x full-width nowrap">
                    <p>Or</p>
                </div>

                <button onClick={signInWithGoogle} className='full-width rounded danger'>Login With Google</button>

                <div className="box column small-gap">
                    <p>already have an account? <Link href={"login"} className='btn link'>Login</Link></p>
                </div>
            </div>
        </main>
    )
}

export default SignUp;


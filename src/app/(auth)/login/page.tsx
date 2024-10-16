"use client";

import Link from 'next/link'
import React from 'react'

const page = () => {
    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // login logic...
    }

    return (
        <main className='auth container box column center-x center-y'>
            <div className="paper box column outline">
                <h1>Login</h1>

                <form className="box column" onSubmit={handleLogin}>
                    <input className='full-width outline rounded' type="email" name="email" id="email" placeholder='Enter Email' />
                    <input className='full-width outline rounded' type="password" name="password" id="password" placeholder='Password' />
                    <input className='btn full-width rounded outline' type="submit" value="Login" />
                </form>

                <div className="box column small-gap">
                    <p>Don&apos;t have an account? <Link href={"signup"} className='btn link'>Sign up</Link></p>
                    <p><Link href={"forgot-password"} className='btn link'>Forgot Password?</Link></p>
                </div>

                <div className="or box center-x full-width nowrap">
                    <p>Or</p>
                </div>

                <button className='full-width danger rounded'>Login With Google</button>
            </div>
        </main>
    )
}

export default page;


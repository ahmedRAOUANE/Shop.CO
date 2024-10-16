"use client";

import Link from 'next/link'
import React from 'react'

const page = () => {
    const handleSignup = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // signup logic...
    }

    return (
        <main className='auth container box column center-x center-y'>
            <div className="paper box column outline">
                <h1>Signup</h1>

                <form className="box column" onSubmit={handleSignup}>
                    <input className='rounded full-width outline' type="text" name="username" id="username" placeholder='username' />
                    <input className='rounded full-width outline' type="email" name="userEmail" id="userEmail" placeholder='Enter Email' />
                    <input className='rounded full-width outline' type="password" name="password" id="password" placeholder='Password' />
                    <input className='rounded btn full-width outline' type="submit" value="Sign up" />
                </form>

                <div className="or box center-x full-width nowrap">
                    <p>Or</p>
                </div>

                <button className='full-width danger'>Login With Google</button>

                <div className="box column small-gap">
                    <p>already have an account? <Link href={"login"} className='btn link'>Login</Link></p>
                </div>
            </div>
        </main>
    )
}

export default page;


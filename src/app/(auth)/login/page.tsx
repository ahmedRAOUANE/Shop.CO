"use client";

// import { UserAuth } from '@/context/authContext';
import { login } from '@/utils/auth';
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import { useRef } from 'react'

const Page = () => {
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    /**
     * the login with google feature have been commented untill we complete the auth logic
     */
    // const { signInWithGoogle } = UserAuth();

    const router = useRouter();

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // login logic...
        if (!emailRef.current?.value || !passwordRef.current?.value) return

        try {
            const creadencials = {
                email: emailRef.current?.value,
                password: passwordRef.current?.value
            }

            await login(creadencials).then(() => {
                router.push('/profile');
            });
        } catch (error) {
            console.log(`Error logging in: ${error}`);
        }
    }

    return (
        <main className='auth container box column center-x center-y'>
            <div className="paper box column outline">
                <h1>Login</h1>

                <form className="box column" onSubmit={handleLogin}>
                    <input ref={emailRef} className='full-width outline rounded' type="email" name="email" id="email" placeholder='Enter Email' />
                    <input ref={passwordRef} className='full-width outline rounded' type="password" name="password" id="password" placeholder='Password' />
                    <input className='btn full-width rounded outline' type="submit" value="Login" />
                </form>

                <div className="box column small-gap">
                    <p>Don&apos;t have an account? <Link href={"signup"} className='btn link'>Sign up</Link></p>
                    <p><Link href={"forgot-password"} className='btn link'>Forgot Password?</Link></p>
                </div>

                {/* Login with Google button */}

                {/* <div className="or box center-x full-width nowrap">
                    <p>Or</p>
                </div>

                <button onClick={signInWithGoogle} className='full-width danger rounded'>Login With Google</button> */}
            </div>
        </main>
    )
}

export default Page;


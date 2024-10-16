"use client";

const page = () => {
    const handleSendCode = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // send reset password code logic...
    }

    const handleResetPassword = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // reset password logic...
    }

    return (
        <main className='auth conainer box column center-x center-y'>
            <h1>Forgot Your Password</h1>

            <div className="box column">
                <form className="box column paper outline full-width" onSubmit={handleSendCode}>
                    <input className='full-width outline rounded' type="email" name="userEmail" id="userEmail" placeholder='Enter Email' />
                    <input className='btn full-width outline rounded' type="submit" value="Get Reset Code" />
                </form>

                <form className="box small-gap nowrap" onSubmit={handleResetPassword}>
                    <input className='outline rounded' type="text" name="resetCode" id="resetCode" placeholder='Reset Code' />
                    <input className='btn full-width outline rounded' type="submit" value="Reset Password" />
                </form>
            </div>
        </main>
    )
}

export default page
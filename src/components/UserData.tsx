"use client";

import { UserAuth } from '@/context/authContext';
import Image from 'next/image'
import React from 'react'

const UserData = () => {
    const { user } = UserAuth();
    console.log(user);

    return (
        <section className='box column'>
            <div className="box">
                <div className="avatar box">
                    {user?.photoURL ? (
                        <Image src={user.photoURL} alt={user.displayName || ""} />
                    ) : (
                        <div className="avatar-placeholder">
                            <p>{user?.displayName ? user.displayName[0] : user?.email![0]}</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}

export default UserData
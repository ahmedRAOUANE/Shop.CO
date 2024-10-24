"use client";

import Image from 'next/image'
import React from 'react';

import img from '@/assets/image1.png';
import { logout } from '@/utils/auth';
import { useRouter } from 'next/navigation';
import { UserAuth } from '@/context/AuthContext';
import useAuthRedirect from '@/hooks/useAuthRedirect';

const UserData = () => {
    useAuthRedirect("/", true);

    const { user } = UserAuth();
    const router = useRouter();

    const handleLogout = async () => {
        try {
            await logout().then(() => {
                router.push('/');
            });
        } catch (err) {
            console.log(`Error logging out: ${err}`);
        }
    }

    return (
        <section className='box full-width' style={{ alignItems: "stretch" }}>
            <div className="avatar box center-x center-y outline hide-in-small">
                {user?.photoURL ? (
                    <Image src={img} alt={user.displayName || ""} />
                ) : (
                    <div className="avatar-placeholder">
                        <p>{user?.displayName ? user.displayName[0] : user?.email![0]}</p>
                    </div>
                )}
            </div>

            <div className="box full-width paper outline small-gap ai-start jc-start">
                <div className="box full-width ai-start jc-start">
                    <div className="box column full-width small-gap ai-start jc-start">
                        <h3 className='disable-guitters'>{user?.displayName || user?.email}</h3>
                        <p>{user?.email}</p>
                    </div>

                    <button onClick={handleLogout}>
                        logout
                    </button>
                </div>

                <div className="avatar box center-x center-y outline hide-in-large">
                    {user?.photoURL ? (
                        <Image src={img} alt={user.displayName || ""} />
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
import UserData from '@/components/UserData'
import UserPaymentCards from '@/components/UserPaymentCards';
import React from 'react';

const Profile = () => {
    return (
        <main className='profile container box column'>
            <h2 className='disable-guitters full-width flex-0'>Profile</h2>

            <UserData />
            <UserPaymentCards />
        </main>
    )
}

export default Profile
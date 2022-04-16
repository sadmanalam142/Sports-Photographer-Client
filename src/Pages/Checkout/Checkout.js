import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import './Checkout.css';

const Checkout = () => {
    const [user] = useAuthState(auth);
    return (
        <div>
            <h2 className='text-center text-success'>Your Booking</h2>
            <div className='input-container'>
                <input type="text" name="name" id="" placeholder='Your Name' />
                <input value={user?.email} readOnly type="email" name="email" id="" />
                <input type="text" name="address" id="" placeholder='Your Address' />
                <input type="text" name="number" id="" placeholder='Your Phone Number' />
                <input className='bg-success' type="submit" value="Procced Order" />
            </div>
        </div>
    );
};

export default Checkout;
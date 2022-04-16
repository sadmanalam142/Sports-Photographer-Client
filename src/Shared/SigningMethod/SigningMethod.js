import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const SigningMethod = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const location = useLocation();
    let errorMessage;

    let from = location.state?.from?.pathname || "/";

    if(error){
        errorMessage = error.message;
    }

    if(user){
        navigate(from, { replace: true });
    }

    return (
        <div>
            <p className='text-danger'>{errorMessage}</p>
            <div className='d-flex align-items-center'>
                <div style={{ height: '2px' }} className='bg-success w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '2px' }} className='bg-success w-50'></div>
            </div>
            <button onClick={() => signInWithGoogle()} className='d-block mx-auto w-50 bg-success text-white rounded'>Sign in with Google</button>
        </div>
    );
};

export default SigningMethod;
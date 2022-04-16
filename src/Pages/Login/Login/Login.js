import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../../Shared/Loading/Loading';
import SigningMethod from '../../../Shared/SigningMethod/SigningMethod';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending, sendingError] = useSendPasswordResetEmail(
        auth
    );

    const navigate = useNavigate();
    const location = useLocation();
    let errorMessage;
    let loadingMessage;

    let from = location.state?.from?.pathname || "/";

    if (user) {
        navigate(from, { replace: true });
    }

    if (error || sendingError) {
        errorMessage = error.message;
    }

    if (loading) {
        loadingMessage = <Loading></Loading>
    }

    const handleEmail = event => {
        setEmail(event.target.value);
    }
    const handlePassword = event => {
        setPassword(event.target.value);
    }
    const handleLoginSubmit = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);
    }

    const handleResetPassword = async () => {
        await sendPasswordResetEmail(email);
        alert('Sent email');
    }

    return (
        <div>
            {loadingMessage}
            <h2 className='text-center text-success'>Please Login!!</h2>
            <div className='w-50 mx-auto'>
                <Form onSubmit={handleLoginSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control onBlur={handlePassword} type="password" placeholder="Password" required />
                    </Form.Group>
                    <p className='text-danger'>{errorMessage}</p>
                    <Button className=' d-block w-50 mx-auto' variant="success" type="submit">
                        Login
                    </Button>
                </Form>
                <p>New to Sports Photographer? <Link className='text-decoration-none text-success' to='/register'>Create an Account</Link></p>
                <p>Forgot Password? <button disabled={!email} onClick={handleResetPassword} className='btn btn-link text-decoration-none text-danger mb-1'>reset password</button></p>
                <SigningMethod></SigningMethod>
            </div>
        </div>
    );
};

export default Login;
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { sendEmailVerification } from 'firebase/auth';
import SigningMethod from '../../../Shared/SigningMethod/SigningMethod';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [agree, setAgree] = useState(false);

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const navigate = useNavigate();
    let errorMessage;

    if(user){
        navigate('/home');
    }

    if(error || updateError){
        errorMessage = error.message;
    }

    const handleChecked = event => {
        setAgree(event.target.checked)
    }
    const handleName = event => {
        setName(event.target.value);
    }
    const handleEmail = event => {
        setEmail(event.target.value);
    }
    const handlePassword = event => {
        setPassword(event.target.value);
    }
    const handleRegisterSubmit = async event => {
        event.preventDefault();
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        toast('Updated profile');
    }

    return (
        <div>
            <h2 className='text-success text-center'>Please Register!!</h2>
            <div className='w-50 mx-auto'>
                <Form onSubmit={handleRegisterSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control onBlur={handleName} type="text" placeholder="Your name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control onBlur={handlePassword} type="password" placeholder="Password" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check className={!agree? 'text-danger' : 'text-success'} onClick={handleChecked} type="checkbox" label="Accept all terms and conditions" />
                    </Form.Group>

                    <p className='text-danger'>{errorMessage}</p>
                    <Button disabled={!agree} className=' d-block w-50 mx-auto' variant="success" type="submit">
                        Register
                    </Button>
                </Form>
                <p>Allready have an account? <Link className='text-decoration-none text-success' to='/login'>Login</Link></p>
            <SigningMethod></SigningMethod>
            <ToastContainer></ToastContainer>
            </div>
        </div>
    );
};

export default Register;
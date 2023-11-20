import React, { useState } from 'react';
import LockFillIcon from 'remixicon-react/LockFillIcon';
import MailFillIcon from 'remixicon-react/MailFillIcon';
import UserFillIcon from 'remixicon-react/UserFillIcon';
import "./Signup.css";
import SignupInput from '../../components/SignupInput';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '../../config/config';
import { useToast } from '@chakra-ui/react';


const Signup = () => {
    const toast = useToast();


    const [userDataSignUp, setUserDataSignUp] = useState({
        name: '',
        email: '',
        password: ''
    });

    const handleChange = (e, field) => {
        setUserDataSignUp({
            ...userDataSignUp,
            [field]: e.target.value
        });
    };

    const signup = async () => {
        try {
            const { user, error } = await supabase.auth.signUp({
                email: userDataSignUp.email,
                password: userDataSignUp.password,
            });
            toast({
                title: `check email for verification`,
                status: "info",
                isClosable: true,
                position: "top",
            });
            console.log(user)

            if (error) {
                throw error;
            }
            await supabase.from('users').insert([{ 
                name: userDataSignUp.name,
                email: userDataSignUp.email,
            }]);

        } catch (error) {
            console.error('Signup error:', error.message);
            toast({
                title: 'Signup Error',
                description: error.message,
                status: 'error',
                isClosable: true,
                position: 'top',
            });
        }
    };
    return (
        <div className="sign-up-page">
            <div className="container">
                <div className="design">
                    <div className="pill-1 rotate-45"></div>
                    <div className="pill-2 rotate-45"></div>
                    <div className="pill-3 rotate-45"></div>
                    <div className="pill-4 rotate-45"></div>
                </div>
                <div className="login">
                    <h3 className="title">Sign Up</h3>
                    <div className="text-input">
                         <UserFillIcon className='i' />
                        <input type="email" placeholder="Name" onChange={(e)=>handleChange(e,'name')}/>
                    </div>
                    <div className="text-input">
                         <MailFillIcon className='i' />
                        <input type="email" placeholder="Email" onChange={(e)=>handleChange(e,'email')}/>
                    </div>
                    <div className="text-input">
                         <LockFillIcon className='i' />
                        <input type="password" placeholder="Password" onChange={(e)=>handleChange(e,'password')}/>
                    </div>
                    <button className="login-btn" onClick={()=>signup()}>Sign Up</button>
                    <p>Have an account? </p>
                    <div className="create">
                        <Link to='/signin'>Sign In</Link>
                        <i className="ri-arrow-right-fill"></i>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;


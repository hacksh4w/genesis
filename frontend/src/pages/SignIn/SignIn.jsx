import  { useState } from 'react';
import LockFillIcon from 'remixicon-react/LockFillIcon';
import MailFillIcon from 'remixicon-react/MailFillIcon';
import "./SignIn.css";
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '../../config/config';
import { useToast } from '@chakra-ui/react';

const SignIn = () => {
    const navigate=useNavigate()
    const toast=useToast({})
    const [userDataSignIn,setData]=useState({
        email:'',
        password:''
    })
    const handleChange = (e,field) => {
        setData({
            ...userDataSignIn,
        [field]:e.target.value
        })
    }

    const signin = async () => {
        try {
            const { error } = await supabase.auth.signInWithPassword({
                email: userDataSignIn.email,
                password: userDataSignIn.password
            });
    
            if (error) {
                throw error;
            }

            const { data, error: userError } = await supabase
                .from('users')
                .select('name')
                .eq('email', userDataSignIn.email)
                .single();
    
            if (userError) {
                throw userError;
            }
    
            if (data) {
                const { name } = data;
                toast({
                    title: `Welcome ${name}`,
                    status: 'success',
                    isClosable: true,
                    position: 'top',
                });
                navigate(`/donors`);
            }
        } catch (error) {
            console.error('Signin error:', error.message);
            toast({
                title: 'Signin Error',
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
                         <MailFillIcon className='i' />
                        <input type="email" placeholder="Email" onChange={(e)=>handleChange(e,'email')}/>
                    </div>
                    <div className="text-input">
                         <LockFillIcon className='i' />
                        <input type="password" placeholder="Password" onChange={(e)=>handleChange(e,'password')}/>
                    </div>
                    <button className="login-btn" onClick={signin}>Sign In</button>
                    <p> Dont have an account?</p>
                    <div className="create">
                        <Link to={'/signup'}>Sign Up</Link>
                        <i className="ri-arrow-right-fill"></i>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignIn;
import React, { useState } from 'react';
import LockFillIcon from 'remixicon-react/LockFillIcon';
import MailFillIcon from 'remixicon-react/MailFillIcon';
import UserFillIcon from 'remixicon-react/UserFillIcon';
import "./SignIn.css";
import SignInInput from '../../components/SignInInput';
import { Link } from 'react-router-dom';

const SignIn = () => {
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
                    <button className="login-btn">Sign In</button>
                    <p>Don't have an account?</p>
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


import React from 'react';
import LockFillIcon from 'remixicon-react/LockFillIcon';
import MailFillIcon from 'remixicon-react/MailFillIcon';
import UserFillIcon from 'remixicon-react/UserFillIcon';
import "./SignIn.css";
import { supabase } from '../../../supabaseConfig';
import SignInInput from '../../components/SignInInput';

const SignIn = () => {
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
                    <SignInInput icon={<MailFillIcon className='i' />} type="email" placeholder="Email" />
                    <SignInInput icon={<LockFillIcon className='i' />} type="password" placeholder="Password" />
                    <button className="login-btn">SIGN IN!</button>
                    <p>Don't have an account?</p>
                    <div className="create">
                        <a href="#">Sign up</a>  {/* put linksss*/}
                        <i className="ri-arrow-right-fill"></i>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignIn;


import React from 'react';
import LockFillIcon from 'remixicon-react/LockFillIcon';
import MailFillIcon from 'remixicon-react/MailFillIcon';
import UserFillIcon from 'remixicon-react/UserFillIcon';
import "./Signup.css";
import SignupInput from '../../components/SignupInput';

const Signup = () => {
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
                    <SignupInput icon={<UserFillIcon className='i' />} type="text" placeholder="Username" />
                    <SignupInput icon={<MailFillIcon className='i' />} type="email" placeholder="Email" />
                    <SignupInput icon={<LockFillIcon className='i' />} type="password" placeholder="Password" />
                    <button className="login-btn">SIGN UP!</button>
                    <p>Have an account? </p>
                    {/* put linksss*/}
                    <div className="create">
                        <a href="#">Sign In</a> 
                        <i className="ri-arrow-right-fill"></i>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;


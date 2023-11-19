import { useState } from 'react';
import LockFillIcon from 'remixicon-react/LockFillIcon';
import MailFillIcon from 'remixicon-react/MailFillIcon';
import "./SignIn.css";
import SignInInput from '../../components/SignInInput';
import { useAuth } from '../../contexts/AuthContext';
import propTypes from 'prop-types';

const SignIn = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
    } catch (error) {
      setErrorMessage('Invalid email or password');
      console.error('Error signing in:', error.message);
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
                    <SignInInput
                    icon={<MailFillIcon className='i' />}
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                    <SignInInput
                        icon={<LockFillIcon className='i' />}
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button className="login-btn" onClick={handleSignIn}>
                        SIGN IN!
                    </button>
                    {errorMessage && <p>{errorMessage}</p>}
                    <p> Do not have an account?</p>
                    <div className="create">
                        <a href="#">Sign up</a>
                        <i className="ri-arrow-right-fill"></i>
                    </div>
                </div>
            </div>
        </div>
    );
}

/*
SignIn.propTypes = {
    onLogin: propTypes.func.isRequired, // Ensure onLogin is a required function prop
}; */

export default SignIn;


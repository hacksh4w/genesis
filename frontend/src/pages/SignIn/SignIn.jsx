import { useState } from 'react';
import LockFillIcon from 'remixicon-react/LockFillIcon';
import MailFillIcon from 'remixicon-react/MailFillIcon';
import './SignIn.css';
import { Link, useNavigate } from 'react-router-dom';
import { useToast } from '@chakra-ui/react';
import { useAuth } from '../../contexts/AuthContext'; // Import AuthContext

const SignIn = () => {
  const navigate = useNavigate();
  const toast = useToast({});
  const { signIn } = useAuth(); // Access the signIn method from AuthContext

  const [userDataSignIn, setUserDataSignIn] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e, field) => {
    setUserDataSignIn({
      ...userDataSignIn,
      [field]: e.target.value,
    });
  };

  const handleSignin = () => {
    const { email, password } = userDataSignIn;
    signIn(email, password, navigate, toast);
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
                    <button className="login-btn" onClick={handleSignin}>Sign In</button>
                    <p> Don't have an account?</p>
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

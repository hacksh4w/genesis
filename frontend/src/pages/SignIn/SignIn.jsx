import { useState } from 'react';
import LockFillIcon from 'remixicon-react/LockFillIcon';
import MailFillIcon from 'remixicon-react/MailFillIcon';
import './SignIn.css';
import SignInInput from '../../components/SigninInput';
import { Link, useNavigate } from 'react-router-dom';
import { useToast } from '@chakra-ui/react';
import { useAuth } from '../../contexts/AuthContext'; // Import AuthContext

const SignIn = () => {
  const navigate = useNavigate();
  const toast = useToast({});
  const { signIn } = useAuth(); // Access the signIn method from AuthContext

  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e, field) => {
    setUserData({
      ...userData,
      [field]: e.target.value,
    });
  };

  const handleSignin = async (e) => {
    e.preventDefault();
    const { email, password } = userData;
    try { /* for admin login */ 
    if(email=="luminousmaxima05@gmail.com" && password=="admin"){
      navigate("/transactions")
    }
    else{signIn(email, password, navigate, toast);}
  } catch (error) {
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
                value={userData.email}
                onChange={handleChange}
                />
                <SignInInput
                    icon={<LockFillIcon className='i' />}
                    type="password"
                    placeholder="Password"
                    value={userData.password}
                    onChange={handleChange}
                />
                <button className="login-btn" onClick={handleSignin}>
                    SIGN IN!
                </button>
                {/*{errorMessage && <p>{errorMessage}</p>} */}
                <p> Do not have an account?</p>
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

import { useState } from 'react';
import LockFillIcon from 'remixicon-react/LockFillIcon';
import MailFillIcon from 'remixicon-react/MailFillIcon';
import UserFillIcon from 'remixicon-react/UserFillIcon';
import "./Signup.css";
import SignupInput from '../../components/SignupInput';
//import { Link, useNavigate } from 'react-router-dom';
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
                        <SignupInput icon={<UserFillIcon className='i' />} type="text" placeholder="Username" />
                        <SignupInput icon={<MailFillIcon className='i' />} type="email" placeholder="Email" />
                        <SignupInput icon={<LockFillIcon className='i' />} type="password" placeholder="Password" />
                        <button className="login-btn" onClick={()=> signup()}>SIGN UP!</button>
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


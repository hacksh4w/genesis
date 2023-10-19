import LockFillIcon from 'remixicon-react/LockFillIcon';
import MailFillIcon from 'remixicon-react/MailFillIcon'
import UserFillIcon from 'remixicon-react/UserFillIcon'

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
                    <div className="text-input">
                        <UserFillIcon className='i' />
                        <input type="text" placeholder="Username" />
                    </div>
                    <div className="text-input">
                        <MailFillIcon className='i' />
                        <input type="email" placeholder="Email" />
                    </div>
                    <div className="text-input">
                        <LockFillIcon className='i' />
                        <input type="password" placeholder="Password" />
                    </div>
                    <button className="login-btn">SIGN UP</button>
                    <p>Have an account?</p>
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

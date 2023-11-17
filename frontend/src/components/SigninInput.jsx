import React from 'react';

const SignupInput = ({ icon, type, placeholder }) => {
    return (
        <div className="text-input">
            {icon}
            <input type={type} placeholder={placeholder} />
        </div>
    );
}

export default SignupInput;
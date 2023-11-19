//import React from 'react';

const SignInInput = ({ icon, type, placeholder, value, onChange }) => {
  return (
    <div className="text-input">
      {icon}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default SignInInput;

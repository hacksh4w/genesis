//import React from 'react';

const SignInInput = ({ icon, type, placeholder, value, onChange }) => {
  return (
    <div className="text-input">
      {icon}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        //onChange={onChange}
        onChange={(e) => onChange(e, type)}
      />
    </div>
  );
};

export default SignInInput;

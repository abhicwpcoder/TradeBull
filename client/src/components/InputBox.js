import React from 'react';
import './InputBox.css';

const InputBox = ({ value, onChange, placeholder, type = "text" }) => {
  return (
    <div className="input-box">
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="input-field"
      />
    </div>
  );
};

export default InputBox;
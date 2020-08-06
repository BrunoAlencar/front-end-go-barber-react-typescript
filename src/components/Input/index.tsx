import React, { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

const Input: React.FC<InputProps> = (props) => (
  <input type="text" {...props} />
)

export default Input;

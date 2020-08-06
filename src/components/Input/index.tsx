import React, { InputHTMLAttributes } from 'react';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;

}

const Input: React.FC<InputProps> = ({label, name, ...rest}) => {
  return (
    <Container>
      <div className="input-block">
        <label htmlFor={name}>{label}</label>
        <input type="text" id={name} {...rest} />
      </div>
    </Container>
  );
}

export default Input;

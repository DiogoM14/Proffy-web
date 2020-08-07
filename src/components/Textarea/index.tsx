import React, { TextareaHTMLAttributes } from 'react';

import { Container } from './styles';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  label: string;

}

const Textarea: React.FC<TextareaProps> = ({label, name, ...rest}) => {
  return (
    <Container>
      <div className="textarea-block">
        <label htmlFor={name}>{label}</label>
        <textarea id={name} {...rest} />
      </div>
    </Container>
  );
}

export default Textarea;

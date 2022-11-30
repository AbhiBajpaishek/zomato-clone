import React from 'react';
import { ChangeEventHandler, useState } from 'react';
import './InputText.css';

type InputTextProps = {
  type: string;
  placeholder: string;
  className?: string;
  action?: ChangeEventHandler<HTMLInputElement>;
};

export const InputText = React.forwardRef<HTMLInputElement, InputTextProps>(
  (props: InputTextProps, ref) => {
    const [text, setText] = useState('');

    const onEmailEditing = (e: React.ChangeEvent<HTMLInputElement>) => {
      setText(e.currentTarget.value ?? '');

      e.target.classList.remove('valid');
      e.target.classList.remove('invalid');
      e.target.classList.add(e.target.validity.valid ? 'valid' : 'invalid');
      props.action && props.action(e);
    };

    return (
      <input
        type={props.type}
        ref={ref}
        className={`input-text ${props.className ?? ''}`}
        placeholder={props.placeholder}
        value={text}
        onChange={onEmailEditing}
      />
    );
  }
);

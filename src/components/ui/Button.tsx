import { ReactNode } from 'react';
import './Button.css';

type ButtonProps = {
  text: string;
  children?: ReactNode;
  className?: string;
  disabled?: boolean;
};

const defaultButtonProps = {
  text: '',
  className: '',
  disabled: false,
};

export const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  return (
    <button
      value={props.text}
      disabled={props.disabled}
      className={`button ${props.className ?? ''}  ${
        props.disabled ? 'disabled' : ''
      }`}
    >
      {props.children}
    </button>
  );
};

Button.defaultProps = defaultButtonProps;

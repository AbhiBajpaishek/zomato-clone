import { ReactNode } from 'react';
import './Button.css';

type ButtonProps = {
  children?: ReactNode;
  className?: string;
  disabled?: boolean;
};

const defaultButtonProps = {
  className: '',
  disabled: false,
};

export const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  return (
    <button
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

import { MouseEventHandler, ReactNode } from 'react';
import './Button.css';

type ButtonProps = {
  children?: ReactNode;
  onSubmit?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
  disabled?: boolean;
};

const defaultButtonProps = {
  className: '',
  disabled: false,
  onSubmit: () => {},
};

export const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  return (
    <button
      disabled={props.disabled}
      className={`button ${props.className ?? ''}  ${
        props.disabled ? 'disabled' : ''
      }`}
      onClick={props.onSubmit}
    >
      {props.children}
    </button>
  );
};

Button.defaultProps = defaultButtonProps;

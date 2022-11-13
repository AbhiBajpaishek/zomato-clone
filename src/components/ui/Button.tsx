import './Button.css';

type ButtonProps = {
  text: string;
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
      disabled={props.disabled}
      className={`button ${props.className ?? ''}  ${
        props.disabled ? 'disabled' : ''
      }`}
    >
      {props.text}
    </button>
  );
};

Button.defaultProps = defaultButtonProps;

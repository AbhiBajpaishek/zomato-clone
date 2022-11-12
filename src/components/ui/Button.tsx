import './Button.css';

type ButtonProps = {
  text: string;
  className?: string;
};

export const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  return (
    <button className={`button ${props.className ?? ''}`}>{props.text}</button>
  );
};

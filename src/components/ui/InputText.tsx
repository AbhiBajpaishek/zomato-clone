import './InputText.css';

type InputTextProps = {
  type: string;
  placeholder: string;
  className?: string;
};

export const InputText: React.FC<InputTextProps> = (props: InputTextProps) => {
  return (
    <input
      type={props.type}
      className={`input-text ${props.className ?? ''}`}
      placeholder={props.placeholder}
    />
  );
};

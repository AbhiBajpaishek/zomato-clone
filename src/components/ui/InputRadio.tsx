import './InputRadio.css';

type InputRadioProps = {
  text: string;
  name: string;
  className?: string;
};

export const InputRadio: React.FC<InputRadioProps> = (
  props: InputRadioProps
) => {
  return (
    <div className="input-radio_parent">
      <input
        type="radio"
        name={props.name}
        className={`input-radio ${props.className ?? ''}`}
      ></input>
      <span> {props.text}</span>
    </div>
  );
};

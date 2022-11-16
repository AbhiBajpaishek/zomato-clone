import React from 'react';
import './InputRadio.css';

type InputRadioProps = {
  text: string;
  name: string;
  checked?: boolean;
  className?: string;
  action?: React.ChangeEventHandler<HTMLInputElement>;
};

export const InputRadio: React.FC<InputRadioProps> = (
  props: InputRadioProps
) => {
  return (
    <div className="input-radio_parent">
      <input
        type="radio"
        name={props.name}
        value={props.text}
        className={`input-radio ${props.className ?? ''}`}
        onChange={props.action}
        checked={props.checked}
      ></input>
      <span> {props.text}</span>
    </div>
  );
};

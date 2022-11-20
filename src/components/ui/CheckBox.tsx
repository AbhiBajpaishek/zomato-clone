import './CheckBox.css';

type CheckBoxProps = {
  children: JSX.Element;
};

export const CheckBox: React.FC<CheckBoxProps> = (props) => {
  return (
    <div className="checkbox">
      <input type="checkbox" className="input-check"></input>
      {props.children}
    </div>
  );
};

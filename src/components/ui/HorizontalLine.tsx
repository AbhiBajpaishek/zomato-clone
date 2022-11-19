import './HorizontalLine.css';
type HorizontalLineProps = {
  text: string | '';
};

export const HorizontalLine: React.FC<HorizontalLineProps> = (props) => {
  return (
    <div className="horizontal-line">
      <hr className="line"></hr>
      <span className="horizontal-line_text">{props.text}</span>
    </div>
  );
};

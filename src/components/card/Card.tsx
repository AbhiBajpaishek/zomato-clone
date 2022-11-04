import './Card.css';

type Props = {
  imgPath: string | undefined;
  heading: string;
  info: string;
};

export const Card: React.FC<Props> = (props: Props) => {
  return (
    <div className="card">
      <div
        className="card-img"
        style={{ backgroundImage: props.imgPath }}
      ></div>
      <div className="card-footer">
        <h3 className="card-footer_heading">{props.heading}</h3>
        <h5 className="card-footer_info">{props.info}</h5>
      </div>
    </div>
  );
};

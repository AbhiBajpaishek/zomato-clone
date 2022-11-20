import './OverlayCard.css';

type OverlayCardProps = {
  children: JSX.Element;
  className?: string;
};

export const OverlayCard: React.FC<OverlayCardProps> = (props) => {
  return (
    <div className={`login-panel ${props.className ? props.className : ''}`}>
      {props.children}
    </div>
  );
};

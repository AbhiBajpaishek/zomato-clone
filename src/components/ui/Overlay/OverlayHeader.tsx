import './OverlayHeader.css';

type OverlayHeaderProps = {
  toggleModal: Function;
  headerText: string;
};

export const OverlayHeader: React.FC<OverlayHeaderProps> = (props) => {
  const onCancelClick = () => {
    props.toggleModal();
  };

  return (
    <div className="login-panel_head">
      <h4 className="login-head">{props.headerText}</h4>
      <i
        className="fa fa-times cancel-icon"
        aria-hidden="true"
        onClick={onCancelClick}
      ></i>
    </div>
  );
};

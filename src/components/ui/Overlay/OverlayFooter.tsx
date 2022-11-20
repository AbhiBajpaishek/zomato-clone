import './OverlayFooter.css';

type OverlayFooterProps = {
  text: string;
  clickableText: string;
};

export const OverlayFooter: React.FC<OverlayFooterProps> = (props) => {
  return (
    <span className="login-footer">
      {props.text}
      <span
        onClick={() => console.log('New Account')}
        className="create-account__link"
      >
        {props.clickableText}
      </span>
    </span>
  );
};

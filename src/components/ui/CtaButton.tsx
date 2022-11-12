import './CtaButton.css';

type CtaButtonProps = {
  imgSrc: string;
  alt: string;
};

export const CtaButton: React.FC<CtaButtonProps> = (props: CtaButtonProps) => {
  return (
    <a href="index.html" className="cta-link">
      <img src={props.imgSrc} alt={props.alt}></img>
    </a>
  );
};

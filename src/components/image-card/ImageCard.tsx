import './ImageCard.css';

type Props = {
  imgPath: string;
  title: string;
  linkText: string;
};

export const ImageCard: React.FC<Props> = (props: Props) => {
  return (
    <section className="image-card" style={{ backgroundImage: props.imgPath }}>
      <article className="image-card_child">{props.title}</article>
      <a href="index.html" className="image-card_child">
        {' '}
        {props.linkText}
      </a>
    </section>
  );
};

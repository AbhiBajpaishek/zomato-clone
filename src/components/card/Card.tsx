import './Card.css';

export const Card: React.FC = () => {
  return (
    <div className="card">
      {/* <img src={card1} alt="Food plate" /> */}
      <div className="card_img"></div>
      <div className="card_footer">
        <article>Order Online</article>
        <h5>Stay home and order to your doorstep</h5>
      </div>
    </div>
  );
};

import './brandHeader.css';
import img from 'assets/brand_logo.avif';

export const BrandHeader: React.FC = () => {
  return (
    <div className="brand-header">
      <img src={img} className="brand-header_img" alt="zomato" />
      <h2 className="brand-header_title">
        Discover the best food & drinks in Lucknow
      </h2>
    </div>
  );
};

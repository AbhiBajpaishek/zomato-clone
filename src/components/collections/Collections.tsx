import { ImageCard } from 'components/image-card/ImageCard';
import collection_1 from 'assets/Collection_Cards_1.jpg';
import collection_2 from 'assets/Collection_Cards_2.jpg';
import collection_3 from 'assets/Collection_Cards_3.jpg';
import collection_4 from 'assets/Collection_Cards_4.jpg';
import './Collections.css';
export const Collections: React.FC = () => {
  return (
    <div className="collections">
      <div className="collection-header">
        <h1 className="collections-title">Collections</h1>
        <div className="collections-info">
          <h5 className="collections-info_text">
            Explore curated lists of top restaurants, cafes, pubs, and bars in
            Lucknow, based on trends
          </h5>
          <a href="index.html" className="collections-info_button">
            All Collections in Lucknow
            <i className="sc-rbbb40-1 iFnyeo sc-bFADNz fskncn" color="#FF7E8B">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#FF7E8B"
                width="12"
                height="12"
                viewBox="0 0 20 20"
                aria-labelledby="icon-svg-title- icon-svg-desc-"
                role="img"
                className="sc-rbbb40-0 ezrcri"
              >
                <title>right-triangle</title>
                <path d="M5 0.42l10 10-10 10v-20z"></path>
              </svg>
            </i>
          </a>
        </div>
      </div>
      <div className="collection-cards">
        <ImageCard
          imgPath={`url(${collection_1}`}
          title="Insta-worth Places"
          linkText="8 Places"
        ></ImageCard>
        <ImageCard
          imgPath={`url(${collection_2}`}
          title="Legends of Lucknow"
          linkText="12 Places"
        ></ImageCard>
        <ImageCard
          imgPath={`url(${collection_3}`}
          title="Smoky Kebabs"
          linkText="5 places"
        ></ImageCard>
        <ImageCard
          imgPath={`url(${collection_4}`}
          title="Best Bars and Pubs"
          linkText="10 Places"
        ></ImageCard>
      </div>
    </div>
  );
};

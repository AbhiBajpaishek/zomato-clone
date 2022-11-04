import { City } from 'components/locations/Locations';
import './CityCard.css';

export const CityCard: React.FC<City> = (props: City) => {
  return (
    <div className="city-card">
      <h4 className="city-card_city">{props.city}</h4>
      <span className="city-card_places">{props.numberOfPlaces} places</span>
      <div className="city-card_icon">
        <i className="sc-rbbb40-1 iFnyeo sc-lenlpJ hfgDug" color="#1C1C1C">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#1C1C1C"
            width="15"
            height="15"
            viewBox="0 0 20 20"
            aria-labelledby="icon-svg-title- icon-svg-desc-"
            role="img"
            className="sc-rbbb40-0 jKmKoK"
          >
            <title>chevron-right</title>
            <path d="M6.98 15.94c-0.3-0.28-0.3-0.76 0-1.060l4.46-4.46-4.46-4.48c-0.3-0.28-0.3-0.76 0-1.060s0.76-0.28 1.060 0l5 5c0.28 0.3 0.28 0.78 0 1.060l-5 5c-0.3 0.3-0.78 0.3-1.060 0z"></path>
          </svg>
        </i>
      </div>
    </div>
  );
};

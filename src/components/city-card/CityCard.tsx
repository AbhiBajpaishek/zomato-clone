import { City } from 'components/locations/Locations';
import './CityCard.css';

export const CityCard: React.FC<City> = (props: City) => {
  return (
    <div className="city-card">
      <h4 className="city-card_city">{props.city}</h4>
      <span className="city-card_places">{props.numberOfPlaces} places</span>
    </div>
  );
};

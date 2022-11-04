import { CityCard } from 'components/city-card/CityCard';
import './Locations.css';

export type City = { city: string; numberOfPlaces: number };

const cityList: City[] = [
  { city: 'Gomti Nagar', numberOfPlaces: 1135 },
  { city: 'Hazratganj', numberOfPlaces: 213 },
  { city: 'Aliganj', numberOfPlaces: 646 },
  { city: 'Indira Nagar', numberOfPlaces: 448 },
  { city: 'Alambagh', numberOfPlaces: 263 },
  { city: 'Ashiyana', numberOfPlaces: 418 },
  { city: 'Chowk', numberOfPlaces: 193 },
  { city: 'Aminabad', numberOfPlaces: 57 },
  { city: 'See more', numberOfPlaces: 58 },
];

export const Locations: React.FC = () => {
  return (
    <div className="locations">
      <h2 className="locations-title">
        Popular localities in and around <b>Lucknow</b>
      </h2>
      <div className="city-cards">
        {cityList.map((city: City) => (
          <CityCard
            key={city.numberOfPlaces}
            city={city.city}
            numberOfPlaces={city.numberOfPlaces}
          ></CityCard>
        ))}
      </div>
    </div>
  );
};

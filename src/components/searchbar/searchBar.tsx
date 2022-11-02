import './searchBar.css';
export const SearchBar: React.FC = () => {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for restaurant, cuisine or a dish"
      />
    </div>
  );
};

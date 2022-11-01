import { SearchBar } from 'components/searchbar/searchBar';
import React from 'react';
import './App.css';
import { BrandHeader } from './components/brandHeader/brandHeader';
import { Nav } from './components/nav/nav';

const App: React.FC = () => (
  <div className="app">
    <header className="app-header">
      <Nav></Nav>
      <BrandHeader></BrandHeader>
      <SearchBar></SearchBar>
    </header>
  </div>
);

export default App;

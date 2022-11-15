import { Card } from 'components/card/Card';
import { SearchBar } from 'components/searchbar/searchBar';
import React, { useState } from 'react';
import './App.css';
import card1 from 'assets/Card_1.avif';
import card2 from 'assets/Card_2.avif';
import card3 from 'assets/Card_3.avif';
import { BrandHeader } from './components/brandHeader/brandHeader';
import { Nav } from './components/nav/nav';
import { Collections } from 'components/collections/Collections';
import { Locations } from 'components/locations/Locations';
import { AppBranding } from 'components/app-branding/AppBranding';
import { Login } from 'components/login/Login';

const App: React.FC = () => {
  const [modal, toggleModal] = useState(false);

  const enableModal = (flag: boolean) => {
    toggleModal(flag);
  };

  return (
    <div className="app">
      <header className="app-header">
        <Nav toggleModal={enableModal}></Nav>
        <BrandHeader></BrandHeader>
        <SearchBar></SearchBar>
      </header>
      <main>
        <div className="products">
          <Card
            imgPath={`url(${card1}`}
            heading="Order Online"
            info="Stay home and order at your doorstep"
          ></Card>
          <Card
            imgPath={`url(${card2}`}
            heading="Dining"
            info="View the city's favourite dining venues"
          ></Card>
          <Card
            imgPath={`url(${card3}`}
            heading="Nightlife and Clubs"
            info="Explore the city's top nightlife outlets"
          ></Card>
        </div>
        <Collections></Collections>
        <Locations></Locations>
        <AppBranding></AppBranding>
        {modal && <Login toggleModal={enableModal}></Login>}
      </main>
    </div>
  );
};

export default App;

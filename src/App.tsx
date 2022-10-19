import React from 'react';
import './App.css';
import { Nav } from './components/nav/nav';

const App: React.FC = () => (
  <div className="app">
    <header className="app-header">
      <Nav></Nav>
    </header>
  </div>
);

export default App;

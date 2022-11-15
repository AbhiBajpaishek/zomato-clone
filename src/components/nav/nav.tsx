import { HamburgerMenu } from 'components/hamburger/HamburgerMenu';
import React, { FormEvent } from 'react';
import './nav.css';

type NavProps = {
  toggleModal: Function;
};

export const Nav: React.FC<NavProps> = (props: NavProps) => {
  const showLogin = (e: FormEvent) => {
    e.target.removeEventListener('click', () => {});
    props.toggleModal(true);
  };

  return (
    <nav className="nav">
      <HamburgerMenu></HamburgerMenu>
      <a href="index.html" className="nav-btn">
        Get the App
      </a>
      <ul className="nav-items">
        <li>
          <a href="index.html"> Investor Relations</a>
        </li>
        <li>
          <a href="index.html">Add restaurant</a>
        </li>
        <li>
          {
            // eslint-disable-next-line
            <a href="#" onClick={showLogin}>
              Log in
            </a>
          }
        </li>
        <li>
          <a href="index.html">Sign up</a>
        </li>
      </ul>
    </nav>
  );
};

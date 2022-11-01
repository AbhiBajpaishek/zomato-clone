import './nav.css';

export const Nav: React.FC = () => {
  return (
    <nav className="nav">
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
          <a href="index.html">Log in</a>
        </li>
        <li>
          <a href="index.html">Sign up</a>
        </li>
      </ul>
    </nav>
  );
};

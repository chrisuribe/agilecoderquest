import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav style={{ background: 'black' }}>
      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/user">User Page</Link>
        </li>
        <li>
          <Link to="/admin">Admin Page</Link>
        </li>
        <li>
          <Link to="/word-shuffle-world">World Shuffle World</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;

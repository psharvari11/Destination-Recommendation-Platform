import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="navbar">
      <div className="navbar-container container">
        <Link to="/" className="navbar-brand">
          Wayfinder
        </Link>
        <div className="navbar-links">
          <Link to="/">Home</Link>
          {user ? (
            <>
              <Link to="/survey">Survey</Link>
              <Link to="/recommendations">Recommendations</Link>
              <Link to="/profile">Profile</Link>
              <button onClick={logout} className="btn">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
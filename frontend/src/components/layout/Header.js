import React from 'react';
import { Link } from 'react-router-dom';

const Header = React.memo(({ onLogout }) => {
  return (
    <div className="header">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="profile">Profile</Link>
              </li>
              <li className="nav-item">
                <button onClick={onLogout} className="nav-link btn btn-link" style={{ color: 'black' }}>Logout</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
});

export default Header;

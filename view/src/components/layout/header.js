  import React from 'react';
  import { Link } from 'react-router-dom';
  import { useAuth } from '../../context/auth_context'; 
  import { formatUsername } from '../../utils/format_username'; 
  import '../../asset/css/header.scss';

  const Header = React.memo(({ onLogout }) => {
    const { user } = useAuth(); 

    return (
      <div className="header">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <button 
              className="navbar-toggler" 
              type="button" 
              data-bs-toggle="collapse" 
              data-bs-target="#navbarNav" 
              aria-controls="navbarNav" 
              aria-expanded="false" 
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                {user ? (
                  <li className="nav-item">
                    <span className="nav-link">
                      Welcome, <span className="highlighted-username">{formatUsername(user.name)}</span>
                    </span>
                  </li>
                ) : (
                  <li className="nav-item">
                    <Link className="nav-link" to="/login">Login</Link>
                  </li>
                )}
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

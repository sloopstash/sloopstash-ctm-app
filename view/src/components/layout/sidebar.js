import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { sidebarConfig } from '../../helper/sidebar_config';
import LogoComponent from './logo';
import '../../asset/css/sidebar.scss';

const Sidebar = React.memo(() => {
  const location = useLocation();

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="logo-container text-center">
          <LogoComponent width="120px" height="120px" />
        </div>
      </div>
      <ul className="sidebar-menu">
        {sidebarConfig.map(({ label, path, icon }) => (
          <li
            key={path}
            className={`sidebar-item ${
              location.pathname === path ? 'active' : ''
            }`}
          >
            <Link to={path} className="sidebar-link">
              <div className="sidebar-item-content">
                <FontAwesomeIcon icon={icon} className="sidebar-icon" />
                <span className="sidebar-label">{label}</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
});

export default Sidebar;

import React from 'react';
import { Link } from 'react-router-dom';
import LogoComponent from '../../components/layout/Logo';
import '../../styles/sidebar.scss';

const Sidebar = React.memo(() => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="logo-container text-center">
          <LogoComponent width="120px" height="120px" />
        </div>
      </div>
      <ul className="sidebar-menu">
        <li className="sidebar-item">
          <Link to="home" className="sidebar-link">Home</Link>
        </li>
        <li className="sidebar-item">
          <Link to="contacts" className="sidebar-link">Contacts</Link>
        </li>
      </ul>
    </div>
  );
});

export default Sidebar;

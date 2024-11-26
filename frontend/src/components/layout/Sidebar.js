import React from 'react';
import { Link } from 'react-router-dom';

// Use React.memo to prevent unnecessary re-renders
const Sidebar = React.memo(() => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h3 className="text-center">Dashboard</h3>
      </div>
      <ul className="list-group">
        <li className="list-group-item">
          <Link to="home" className="sidebar-link">Home</Link>
        </li>
        <li className="list-group-item">
          <Link to="contacts" className="sidebar-link">Contacts</Link>
        </li>
      </ul>
    </div>
  );
});

export default Sidebar;

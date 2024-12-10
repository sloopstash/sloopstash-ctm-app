import React from 'react';
import { Outlet } from 'react-router-dom';

const MainContent = () => {
  return (
    <div className="content">
      <Outlet />  {/* This will render the matched nested route */}
    </div>
  );
};

export default MainContent;

import React from 'react';
import { ReactComponent as Logo } from '../../asset/image/logo/logo.svg';
import '../../asset/css/logo.scss';

const LogoComponent = () => {
  return (
    <div className="logo-container">
      <Logo  />
    </div>
  );
};

export default LogoComponent;

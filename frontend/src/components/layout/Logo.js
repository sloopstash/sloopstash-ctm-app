import React from 'react';
import { ReactComponent as Logo } from '../../assets/images/logo/logo.svg';
import '../../styles/logo.scss';

const LogoComponent = () => {
  return (
    <div className="logo-container">
      <Logo  />
    </div>
  );
};

export default LogoComponent;

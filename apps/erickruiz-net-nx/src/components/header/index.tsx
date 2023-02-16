import React from 'react';

import { Logo } from '@components';

export const Header: React.FC = () => {
  return (
    <div className="fluid header">
      <Logo />
      <div className="header-menu">
        <div>ABOUT US</div>
      </div>
      <div
        className="mobile-menu"
        onClick={() => {
          const showMobileMenu =
            document.body.dataset.showMobileMenu === 'true';
          document.body.dataset.showMobileMenu = (!showMobileMenu).toString();
        }}
      >
        <div className="line" />
        <div className="line" />
        <div className="line" />
      </div>
    </div>
  );
};

import React from 'react';

import { Logo } from '@components';

function scrollSectionIntoView(e) {
  const isMobile = document.documentElement.getBoundingClientRect().width < 992;
  const el = document.getElementById(e.currentTarget.dataset.scrollTo);
  const computed = getComputedStyle(document.documentElement);
  const headerHeight = +computed
    .getPropertyValue('--header-height')
    .replace('px', '');
  const mobileMenuHeight = +computed
    .getPropertyValue('--mobile-menu-height')
    .replace('px', '');
  const scrollTo =
    window.scrollY + el.getBoundingClientRect().y - headerHeight - (isMobile ? mobileMenuHeight : 0);
  window.scrollTo({ top: scrollTo });
  document.body.dataset.showMobileMenu = 'false';
}

export const Header: React.FC = () => {
  return (
    <div className="header">
      <div className="fluid header-wrapper">
        <Logo />
        <div className="header-menu">
          <div data-scroll-to="top" onClick={scrollSectionIntoView}>
            TOP
          </div>
          <div data-scroll-to="about" onClick={scrollSectionIntoView}>
            ABOUT
          </div>
          <div data-scroll-to="projects" onClick={scrollSectionIntoView}>
            PROJECTS
          </div>
        </div>
        <div
          className="mobile-menu-btn"
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
      <div className="mobile-menu">
        <div data-scroll-to="top" onClick={scrollSectionIntoView}>
          TOP
        </div>
        <div data-scroll-to="about" onClick={scrollSectionIntoView}>
          ABOUT
        </div>
        <div data-scroll-to="projects" onClick={scrollSectionIntoView}>
          PROJECTS
        </div>
      </div>
    </div>
  );
};

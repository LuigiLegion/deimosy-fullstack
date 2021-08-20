// Imports
import React, { FunctionComponent } from 'react';

import { BurgerProps } from '../../interfaces';

// Component
const Navbar: FunctionComponent<BurgerProps> = ({ active, setActive }) => {
  return (
    <a
      className={`navbar-burger burger ${active ? 'is-active' : ''}`}
      href="/"
      role="button"
      aria-label="menu"
      aria-expanded="false"
      data-target="navbarBasicExample"
      onClick={event => {
        event.preventDefault();
        setActive(!active);
      }}
    >
      {[true, true, true].map((bool, idx) => (
        <span key={idx} aria-hidden={bool} />
      ))}
    </a>
  );
};

// Exports
export default Navbar;

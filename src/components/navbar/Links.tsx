// Imports
import React, { FunctionComponent } from 'react';

import { LinksProps } from '../../interfaces';

// Component
const Links: FunctionComponent<LinksProps> = ({
  active,
  setActive,
  clear,
  setClear,
}) => {
  return (
    <div
      id="navbarBasicExample"
      className={`navbar-menu ${active ? 'is-active' : ''}`}
    >
      <div className="navbar-end">
        <a
          className="navbar-item text-style-bold"
          href="/"
          onClick={event => {
            event.preventDefault();
            setClear(!clear);
            setActive(!active);
          }}
        >
          Clear
        </a>

        <a
          className="navbar-item text-style-bold"
          href="https://github.com/LuigiLegion/deimosy-fullstack"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setActive(!active)}
        >
          Source
        </a>

        <a
          className="navbar-item text-style-bold"
          href="https://taluigi.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setActive(!active)}
        >
          Contact
        </a>
      </div>
    </div>
  );
};

// Exports
export default Links;

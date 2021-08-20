// Imports
import React, { FunctionComponent } from 'react';

// Component
const Logo: FunctionComponent = () => {
  return (
    <a
      className="nav navbar-item navbar-logo text-style-bold"
      href="/"
      onClick={event => event.preventDefault()}
    >
      Deimosy
    </a>
  );
};

// Exports
export default Logo;

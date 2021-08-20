// Imports
import React, { FunctionComponent } from 'react';

// Component
const MadeBy: FunctionComponent = () => {
  return (
    <div className="made-by text-align-center">
      <span>Made with ❤ by </span>

      <a
        className="author-name text-style-bold"
        href="https://www.linkedin.com/in/tal-luigi"
        target="_blank"
        rel="noopener noreferrer"
      >
        Tal Luigi
      </a>
    </div>
  );
};

// Exports
export default MadeBy;

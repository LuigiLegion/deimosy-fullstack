// Imports
import React, { FunctionComponent } from 'react';

// Component
const Preloader: FunctionComponent = () => {
  return (
    <div id="p5_loading" className="loadingclass">
      <img
        src="./preloader.gif"
        alt="Preloader"
      />
    </div>
  );
};

// Exports
export default Preloader;

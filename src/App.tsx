// Imports
import React, { useState, FunctionComponent } from 'react';

import { Navbar, P5, MadeBy } from './components';

// Component
const App: FunctionComponent = () => {
  const [clear, setClear] = useState(false);

  return (
    <div className="App">
      <Navbar clear={clear} setClear={setClear} />

      <P5 clear={clear} />

      <MadeBy />
    </div>
  );
};

// Exports
export default App;

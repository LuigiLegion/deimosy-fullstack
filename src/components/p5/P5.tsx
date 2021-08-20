// Imports
import React, { FunctionComponent } from 'react';
import P5Wrapper from 'react-p5-wrapper';

import { P5Props } from '../../interfaces';
import { Preloader } from '..';
import { sketch } from '../../utils';

// Component
const P5: FunctionComponent<P5Props> = ({ clear }) => {
  return (
    <div id="p5">
      <P5Wrapper sketch={sketch} clear={clear} />

      <Preloader />
    </div>
  );
};

// Exports
export default P5;

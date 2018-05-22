import React from 'react';
import EyeAnimation from '../eyes/animation';

export default () => (
  <g id="sun" stroke="#000" strokeLinecap="round">
    <circle id="sun-shape" cx="234.1" cy="321.1" r="112.3" strokeMiterlimit="10" strokeWidth="5" />
    <g id="eyes" fill="#fff" strokeLinejoin="round" strokeWidth="4">
      <circle id="eye2" cx="177.8" cy="296.7" r="12.8" />
      <EyeAnimation>
        <circle id="eye1" cx="291.8" cy="296.7" r="12.8" />
      </EyeAnimation>
    </g>
  </g>
);

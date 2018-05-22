import React from 'react';
import Animation from './animation';

//     transform: translate(330px, 230px);

export default () => (
  <g
    id="bird-group"
    fill="none"
    stroke="#000"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="4"
  >
    <Animation transform="translate(390 230)" />
    <Animation transform="translate(20 200)" />
  </g>
);

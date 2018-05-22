import React from 'react';
import Animation from './animations';

export default () => (
  <g id="atom_group" data-name="atom group" fill="#fff" stroke="#000" strokeLinejoin="round">
    <Animation delay="500" translateX="85" translateY="35">
      <circle id="atom3" cx="1015" cy="42" r="8" />
    </Animation>
    <Animation delay="1000" translateX="-140" translateY="-30">
      <circle id="atom2" cx="1133.8" cy="435.2" r="8" />
    </Animation>
    <Animation reverse translateX="100" translateY="65">
      <circle id="atom1" cx="684" cy="114.1" r="8" />
    </Animation>
  </g>
);

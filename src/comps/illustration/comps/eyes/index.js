import React from 'react';
import Animation from './animation';

export default () => (
  <g id="Occhi">
    <Animation rotate="yes">
      <circle
        id="eyedark3"
        cx="939.6"
        cy="418.1"
        r="8"
        stroke="#000"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="4"
      />
    </Animation>
    <Animation delay="1000">
      <circle
        id="eyedark2"
        cx="1052.5"
        cy="218.4"
        r="7.5"
        stroke="#000"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="5"
      />
    </Animation>
    <Animation delay="2000">
      <circle
        id="eyedark1"
        cx="1144.7"
        cy="346.4"
        r="8"
        stroke="#000"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="4"
      />
    </Animation>
    <Animation delay="2500" rotate="yes">
      <g id="eyelight">
        <circle cx="1242.8" cy="45.2" r="11" fill="#fff" />
        <path
          d="M1255,50.2a8.5,8.5,0,1,1-8.5,8.5,8.5,8.5,0,0,1,8.5-8.5m0-5a13.5,13.5,0,1,0,13.5,13.5A13.6,13.6,0,0,0,1255,45.2Z"
          transform="translate(-12.2 -13.5)"
        />
      </g>
    </Animation>
  </g>
);

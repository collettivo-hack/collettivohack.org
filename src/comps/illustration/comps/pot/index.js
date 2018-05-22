import React from 'react';
import styled, { keyframes } from 'styled-components';

const leaf = keyframes` /* stylelint-disable-line */
  0%{transform: rotate(0deg);}
  50%{transform: rotate(20deg);}
  100%{transform: rotate(0deg);}
`;

const stalk = keyframes` /* stylelint-disable-line */
  0%{transform: rotate(0deg);}
  23.33%{transform: rotate(-5deg);}
  74.44%{transform: rotate(7deg);}
  100%{transform: rotate(0deg);}
`;

const Leaf = styled.g`
  animation-name: ${leaf};
  animation-timing-function: cubic-bezier(0.42, 0, 1, 1);
  animation-iteration-count: infinite;
  animation-delay: ${({ delay }) => delay || 0}ms;
  animation-direction: normal;
  animation-duration: 3s;
  -webkit-backface-visibility: hidden;
  transform-origin: 0% 100%;
  transform-box: fill-box;
  transform: rotate(0deg);
`;

const Stalk = styled.g`
  animation-name: ${stalk};
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-delay: ${({ delay }) => delay || 0}ms;
  animation-direction: normal;
  animation-duration: 3s;
  -webkit-backface-visibility: hidden;
  transform-origin: 0% 100%;
  transform-box: fill-box;
  transform: rotate(0deg);
`;

const Pot = () => (
  <g id="BJlUWaP3AM" transform="translate(1007 315)">
    <Stalk>
      <g id="rk-Ub6Dn0f_BJqsTDn0G" data-animator-group="true" data-animator-type="1">
        <g id="rk-Ub6Dn0f">
          <path
            style={{
              fill: '#FFFFFF',
              stroke: ' #000000',
              strokeWidth: 4,
              strokeLinecap: 'round',
              strokeLinejoin: 'round',
            }}
            id="S1G8baw3RG"
            d="M40.7,73.4c0,0,12.7-28.8,8.3-65.4"
          />
          <g id="BJX8baPhRz_Bk7wTvhCM" data-animator-group="true" data-animator-type="1">
            <Leaf>
              <path
                id="BJX8baPhRz"
                style={{
                  fill: '#FFFFFF',
                  stroke: ' #000000',
                  strokeWidth: 4,
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                }}
                d="M70.3,38.7c-6.7,4.6-14.4,7.6-22.4,8.7c3.7-7.2,9.1-13.5,15.6-18.3c6.6-4.5,14.1-7.3,22-8.2&#10;&#9;&#9;&#9;C82,28,76.8,34.1,70.3,38.7z"
              />
            </Leaf>
          </g>
        </g>
      </g>
    </Stalk>
    <polygon
      style={{
        fill: '#FFFFFF',
        stroke: ' #000000',
        strokeWidth: 4,
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
      }}
      id="B14I-Tv3AG"
      points="61.2,105.5 28.5,105.5 26.5,62.2 63.2,62.2 &#9;"
    />
  </g>
);

export default Pot;

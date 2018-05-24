import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

const propTypes = {
  delay: PropTypes.string,
  reverse: PropTypes.bool,
  transform: PropTypes.string,
};

function animationBird() {
  return keyframes` /* stylelint-disable-line */
  0%{transform: rotate(0deg);}
  30%{transform: rotate(15deg);}
  70%{transform: rotate(-15deg);}
  100%{transform: rotate(0deg);}
`;
}

function animationRight() {
  return keyframes` /* stylelint-disable-line */
  0%{transform: rotate(0deg);}
  20%{transform: rotate(-30deg);}
  40%{transform: rotate(0deg);}
  54%{transform: rotate(-25deg);}
  70%{transform: rotate(0deg);}
  85.33%{transform: rotate(-7.97deg);}
  100%{transform: rotate(0deg);}
`;
}

function animationLeft() {
  return keyframes` /* stylelint-disable-line */
  0%{transform: rotate(0deg);}
  20%{transform: rotate(30deg);}
  40%{transform: rotate(0deg);}
  54%{transform: rotate(25deg);}
  70%{transform: rotate(0deg);}
  85.33%{transform: rotate(7.97deg);}
  100%{transform: rotate(0deg);}
`;
}

const Wrapper = styled.g`
  animation-name: ${animationBird};
  animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-delay: ${({ delay }) => delay || 0}ms;
  animation-duration: 5s;
  -webkit-backface-visibility: hidden;
  transform-origin: 50% 50%;
  transform-box: fill-box;
  transform: rotate(0deg);
`;

const Right = styled.g`
  animation-name: ${animationRight};
  animation-timing-function: cubic-bezier(0.42, 0, 1, 1);
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-delay: ${({ delay }) => delay || 0}ms;
  animation-duration: 5s;
  -webkit-backface-visibility: hidden;
  transform-origin: 100% 100%;
  transform-box: fill-box;
  transform: rotate(0deg);
`;

const Left = styled.g`
  animation-name: ${animationLeft};
  animation-timing-function: cubic-bezier(0.42, 0, 1, 1);
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-delay: ${({ delay }) => delay || 0}ms;
  animation-duration: 5s;
  -webkit-backface-visibility: hidden;
  transform-origin: 0% 100%;
  transform-box: fill-box;
  transform: rotate(0deg);
`;

const Animation = ({ transform, delay, reverse }) => (
  <g delay={delay} reverse={reverse}>
    <g
      transform={transform}
      id="BJgHwWPhAf_SJCjDDh0M"
      data-animator-group="true"
      data-animator-type="1"
    >
      <g id="BJgHwWPhAf">
        <g>
          <g id="BJ-HwZwhRG_HJnLGDhRz">
            <path
              id="BJ-HwZwhRG"
              d="M77.3,47.8C74,45.6,70,44.4,66,44.5c-4-0.1-7.9,1-11.3,3.2c-2.9,2-4.7,4.8-4.7,8"
            />
          </g>
        </g>
        <g>
          <g id="B1zHvWPn0f_Bk57zvnAf">
            <path
              id="B1zHvWPn0f"
              d="M50,55.7c0-3.1-1.8-6-4.6-8c-3.3-2.3-7.3-3.5-11.3-3.4c-4-0.1-8,1-11.3,3.2"
            />
          </g>
        </g>
      </g>
    </g>
  </g>
);

Animation.propTypes = propTypes;

export default Animation;

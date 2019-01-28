import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

const propTypes = {
  delay: PropTypes.string,
  rotate: PropTypes.string,
  children: PropTypes.element,
};

const blink = keyframes` /* stylelint-disable-line */
66.67%{transform: scale(1, 1);}
73.33%{transform: scale(1, 0.05);}
83.33%{transform: scale(1, 1);}
0%{transform: scale(1, 1);}
100%{transform: scale(1, 1);}
`;

const blinkRotate = keyframes` /* stylelint-disable-line */
66.67%{transform: scale(1, 1);}
73.33%{transform: scale(0.05, 1);}
83.33%{transform: scale(1, 1);}
0%{transform: scale(1, 1);}
100%{transform: scale(1, 1);}
`;

const Wrapper = styled.g`
  animation-name: ${({ rotate }) => (rotate === 'yes' ? blinkRotate : blink)};
  animation-timing-function: cubic-bezier(0, 0, 1, 1);
  animation-delay: ${({ delay }) => delay || 0}ms;
  animation-direction: normal;
  animation-duration: 3s;
  -webkit-backface-visibility: hidden;
  transform-origin: 50% 50%;
  transform-box: fill-box;
  transform: scale(1, 1);
  animation-iteration-count: infinite;
`;

const Eye = ({ children, delay, rotate }) => (
  <Wrapper delay={delay} rotate={rotate}>
    {children}
  </Wrapper>
);

Eye.propTypes = propTypes;

export default Eye;

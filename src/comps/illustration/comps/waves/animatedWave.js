import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

const translateX = 30;
const translateY = 5;

const propTypes = {
  delay: PropTypes.string,
  reverse: PropTypes.bool,
  children: PropTypes.element,
};

const translateOne = keyframes` /* stylelint-disable-line */
  0% {
    transform: none;
  }
  25% {
    transform: translate(${translateX}px, ${translateY}px);
  }
  50% {
    transform: none;
  }
  75% {
    transform: translate(-${translateX - 2}px, ${translateY}px);
  }
  100% {
    transform: none;
  }
`;

const translateTwo = keyframes` /* stylelint-disable-line */
  0% {
    transform: translate(-${translateX - 2}px, ${translateY}px);
  }
  25% {
    transform: none;
  }
  50% {
    transform: translate(${translateX}px, ${translateY}px);
  }
  75% {
    transform: none;
  }
  100% {
    transform: translate(-${translateX - 2}px, ${translateY}px);
  }
`;

const Wrapper = styled.g`
  animation-name: ${({ reverse }) => (reverse ? translateTwo : translateOne)};
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-delay: ${({ delay }) => delay || 0}ms;
  animation-duration: 20s;
  -webkit-backface-visibility: hidden;
`;

const Wave = ({ children, delay, reverse }) => (
  <Wrapper delay={delay} reverse={reverse}>
    {children}
  </Wrapper>
);

Wave.propTypes = propTypes;

export default Wave;

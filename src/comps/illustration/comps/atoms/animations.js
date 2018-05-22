import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

const propTypes = {
  delay: PropTypes.string,
  reverse: PropTypes.bool,
  children: PropTypes.element,
  translateX: PropTypes.string,
  translateY: PropTypes.string,
};

function animation(props) {
  return keyframes` /* stylelint-disable-line */
  0% {
    transform: none;
  }
  25% {
    transform: translateY(${props.translateY || '0'}px);
  }
  50% {
    transform: none;
  }
  75% {
    transform: translateX(${props.translateX || '0'}px);
  }
  100% {
    transform: none;
  }
`;
}

function animationReverse(props) {
  return keyframes` /* stylelint-disable-line */
  0% {
    transform: none;
  }
  25% {
    transform: translateX(${props.translateX || '0'}px);
  }
  50% {
    transform: none;
  }
  75% {
    transform: translateY(${props.translateY || '0'}px);
  }
  100% {
    transform: none;
  }
`;
}

const Wrapper = styled.g`
  animation-name: ${({ reverse }) => (reverse ? animationReverse : animation)};
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-delay: ${({ delay }) => delay || 0}ms;
  animation-duration: 10s;
  -webkit-backface-visibility: hidden;
`;

const Animation = ({
  children, delay, reverse, translateX, translateY,
}) => (
  <Wrapper delay={delay} reverse={reverse} translateX={translateX} translateY={translateY}>
    {children}
  </Wrapper>
);

Animation.propTypes = propTypes;

export default Animation;

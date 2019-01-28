import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  delay: PropTypes.string,
  reverse: PropTypes.bool,
  transform: PropTypes.string,
};
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

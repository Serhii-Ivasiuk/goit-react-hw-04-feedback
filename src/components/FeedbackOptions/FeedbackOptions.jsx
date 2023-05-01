// Libs
import React from 'react';
import PropTypes from 'prop-types';
// Styled components
import { FeedbackList, FeedbackBtn } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FeedbackList>
      {Object.keys(options).map(item => (
        <li key={item}>
          <FeedbackBtn type="button" onClick={onLeaveFeedback}>
            {item}
          </FeedbackBtn>
        </li>
      ))}
    </FeedbackList>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.objectOf(PropTypes.number.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

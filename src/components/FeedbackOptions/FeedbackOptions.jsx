// Libs
import React from 'react';
import PropTypes from 'prop-types';
// Styled components
import { FeedbackList, FeedbackBtn } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FeedbackList>
      {options.map(item => (
        <li key={item}>
          <FeedbackBtn type="button" onClick={() => onLeaveFeedback(item)}>
            {item}
          </FeedbackBtn>
        </li>
      ))}
    </FeedbackList>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

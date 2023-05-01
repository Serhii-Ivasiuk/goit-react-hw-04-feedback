// Libs
import React from 'react';
import PropTypes from 'prop-types';
// Styled components
import { Message } from './Notification.styled';

export const Notification = ({ message }) => {
  return <Message>{message}</Message>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

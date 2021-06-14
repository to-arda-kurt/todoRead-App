import React from 'react';
import PropTypes from 'prop-types';

const Alert = ({ message, show }) => (
  <div className="Alert">{show ? <p>{message}</p> : null}</div>
);

Alert.defaultProps = {
  message: 'Alert Message !',
  show: false,
};

Alert.propTypes = {
  message: PropTypes.string,
  show: PropTypes.bool.isRequired,
};
export default Alert;

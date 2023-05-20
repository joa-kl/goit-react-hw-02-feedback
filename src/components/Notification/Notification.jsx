import propTypes from 'prop-types';

export const Notification = ({ message }) => (
  <p style={{ color: 'red' }}>{message}</p>
);

Notification.propTypes = {
  message: propTypes.string.isRequired,
};
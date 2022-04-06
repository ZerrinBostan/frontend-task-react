import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ text, className }) => (
  <div className={`header ${className}`}>{text}</div>
);
Header.defaultProps = {
  className: '',
};

Header.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Header;
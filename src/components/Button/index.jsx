import React from "react";
import PropTypes from "prop-types";
import ReactLoading from "react-loading";

const Button = ({ className, text, loading, ...props }) => {
  console.log('loading :>> ', loading);
  return (
    <button type="button" className={`btn btn-secondary ${className}`} {...props}>
    {loading ? (
      <ReactLoading
        type="spinningBubbles"
        width={18}
        height={18}
        color="white"
      />
    ) : (
      <>
        <span>{text}</span>
      </>
    )}
  </button>
  );
}

Button.defaultProps = {
  text: "",
  className: "",
  loading: false,
};

Button.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
  loading: PropTypes.bool,
};

export default Button;

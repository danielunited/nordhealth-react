import React from 'react';
import PropTypes from 'prop-types';
import './button.css';
import "@nordhealth/css"
import { Button as nordButton } from "@nordhealth/react"

export const Button = ({ label }) => {
  return (
    <nordButton>
      {label}
    </nordButton>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
};

Button.defaultProps = {
};

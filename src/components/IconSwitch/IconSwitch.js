import React from 'react';
import PropTypes from 'prop-types';
import './IconSwitch.css';

function IconSwitch(props) {
  const { icon, onSwitch } = props;

  return (
    <button className="switch-button" onClick={onSwitch}>
      <span className="material-icons">{icon}</span>
    </button>
  )
}

IconSwitch.propTypes = {
  icon: PropTypes.string.isRequired,
  onSwitch: PropTypes.func.isRequired
}

export default IconSwitch;
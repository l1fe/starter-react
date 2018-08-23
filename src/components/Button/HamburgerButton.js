import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.scss';

const HamburgerButton = ({ onClick, opened, className }) => (
  <button
    type="button"
    onClick={onClick}
    className={[
      styles.hamburgerBtn,
      opened && styles.openedHamburgerBtn,
      className,
    ].join(' ')}
  >
    <span />
    <span />
    <span />
  </button>
);

HamburgerButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  opened: PropTypes.bool,
  className: PropTypes.string,
};

export default HamburgerButton;

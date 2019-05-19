import React from 'react';
import PropTypes from 'prop-types';
import { GlobalHeader } from './styles';

const Header = ({ logo, pollName }) => (
  <GlobalHeader>
    <header>
      <img src={logo} alt="Logo branca PolLauncher" />
      <h1>{pollName}</h1>
    </header>
  </GlobalHeader>
);

Header.propTypes = {
  pollName: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
};
export default Header;

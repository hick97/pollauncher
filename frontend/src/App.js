import React, { Fragment } from 'react';

import Routes from './Routes';

import GlobalStyle from './styles/global';

// Stateless component
const App = () => (
  <Fragment>
    <GlobalStyle />
    <Routes />
  </Fragment>
);

export default App;

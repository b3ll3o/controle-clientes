import React from 'react';

import { BrowserRouter as Router, Route} from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import light from './styles/themes/light';

import Listagem from './pages/Listagem';
import Adicao from './pages/Adicao';

export default () => (
  <ThemeProvider theme={light}>
    <Router>
      <Route path='/' exact>
        <Listagem />
      </Route>
      <Route path='/add'>
        <Adicao />
      </Route>
    </Router>
  </ThemeProvider>
);


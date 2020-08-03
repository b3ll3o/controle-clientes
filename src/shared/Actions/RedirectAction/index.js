import React from 'react';

import { Link } from 'react-router-dom';

import Container from './styles';

export default ({ path, pathName, icon }) => (
  <Container>
    { pathName && <Link to={path}>{ pathName }</Link> }
    { icon && <Link to={path}>{ icon }</Link> }
  </Container>
)
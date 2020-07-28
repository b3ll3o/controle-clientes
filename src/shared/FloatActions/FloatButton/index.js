import React from 'react';
import { Link } from 'react-router-dom';

import Container from './styles';

export default ({ icon, path }) => (
  <Container>
    <Link to={path}>{icon}</Link>
  </Container>
)
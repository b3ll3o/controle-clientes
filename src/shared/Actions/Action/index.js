import React from 'react';

import Container from './styles';

export default ({ action, icone, path }) => (
  <Container onClick={action} >
    { icone }
  </Container>
)
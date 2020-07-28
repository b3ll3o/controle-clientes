import React from 'react';

import Container from './styles';

export default ({ nome, endereco }) => (
  <Container> 
    <span className='nome'>{ nome }</span>
    <span className='endereco'>{ endereco }</span>
  </Container>
)
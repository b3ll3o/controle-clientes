import React from 'react';

import Container from './styles';

import { useSelector } from 'react-redux';

import Header from '../../shared/Header';
import FloatButton from '../../shared/FloatActions/FloatButton';

import Cliente from './Cliente';

import { useGetClientes } from '../../hooks';

export default () => {

  const { clientes } = useSelector(state => state);

  useGetClientes();

  console.log(clientes);

  return (
    <Container>
      <Header />
      <FloatButton icon='+' path='/add' />
      { clientes && clientes.map(cliente => 
        <div>
          <Cliente {...cliente} />
        </div>)}
    </Container>
  );
}
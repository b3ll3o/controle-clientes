import React, { useState } from 'react';

import Container from './styles';

import { useAddCliente } from '../../../hooks';

export default () => {

  const [ nome, setNome ] = useState('');
  const [ endereco, setEndereco ] = useState('');

  const addCliente = useAddCliente(nome, endereco);

  return (
    <Container>
      <form onSubmit={addCliente}>
        <input type='text' placeholder='Nome' onChange={e => setNome(e.target.value)} />
        <input type='text' placeholder='Endereço' onChange={e => setEndereco(e.target.value)} />
        <button type='submit'>Adicionar</button>
      </form>
    </Container>
  )
}
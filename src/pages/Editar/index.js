import React, { useState } from 'react';

import Container from './styles';

import { useParams } from 'react-router-dom';

import { useEditCliente } from '../../hooks';

import Header from '../../shared/Header';
import Form from '../../shared/Form';

export default () => {

  const { id } = useParams();

  const [ nomeEditado, setNomeEditado ] = useState('');
  const [ enderecoEditado, setEnderecoEditado ] = useState('');

  const [ nome, endereco, editCliente ] = useEditCliente(id, nomeEditado, enderecoEditado);

  const setter = set => e => {
    e.preventDefault();
    set(e.target.value);
  }

  return (
    <Container>
      <Header />
      <Form 
        onSubmitAction={editCliente}
        campos={
          <>
            <input defaultValue={nome && nome} onChange={setter(setNomeEditado)} />
            <input defaultValue={endereco && endereco} onChange={setter(setEnderecoEditado)} />
            <button type='submit' >Editar</button>
          </>
        } />
    </Container>
  )
}
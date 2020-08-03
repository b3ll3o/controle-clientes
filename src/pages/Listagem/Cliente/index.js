import React from 'react';

import Container from './styles';

import { ReactComponent as DeleteIcon } from '../../../assets/delete.svg';
import { ReactComponent as EditIcon } from '../../../assets/edit.svg';

import { useDeleteCliente } from '../../../hooks/index';

import Action from '../../../shared/Actions/Action';
import RedirectAction from '../../../shared/Actions/RedirectAction';

export default ({ id, nome, endereco }) => (
  <Container> 
    <div className='primeira-linha'>
      <span className='nome'>{ nome }</span>
      <div className='actions-container'>
        <Action icone={<DeleteIcon />} action={useDeleteCliente(id)} />
        <RedirectAction icon={<EditIcon />} path={`/edit/${id}`} />
      </div>
    </div>
    <span className='endereco'>{ endereco }</span>
  </Container>
)
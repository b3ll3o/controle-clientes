import types from './types';


export default {

  create: cliente => ({
    type: types.CREATE_CLIENTE, 
    payload: {
      ...cliente
    }
  }), 

  read: () => ({
    type: types.READ_CLIENTES
  }), 

  edit: (id, nome, endereco) => ({
    type: types.EDIT_CLIENTE, 
    payload: {
      id, nome, endereco
    }
  }), 

  delete: id => ({
    type: types.DELETE_CLIENTE, 
    payload: {
      id
    }
  })
}
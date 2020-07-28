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
  })
}
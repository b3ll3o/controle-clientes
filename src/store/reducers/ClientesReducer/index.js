
const INITIAL_STATE = [];

export default (state=INITIAL_STATE, action) => {

  switch(action.type){

    case 'CREATE_CLIENTE_SUCCESS': {
      const { cliente } = action.payload;
      console.log(cliente);
      return cliente;
    }

    case 'READ_CLIENTES_SUCCESS': {
      const { clientes } = action.payload;
      return clientes;
    }

    default: 
      return state;
  }
}
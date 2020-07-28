
import { put, takeLatest } from 'redux-saga/effects';

import { v4 as uuid } from 'uuid';

import types from '../../actions/types';

import LocalStorageService from '../../../services/LocalStorageService';

const store = LocalStorageService('clientes');

const createNewCliente = (nome, endereco) => ({
  nome, endereco, id: uuid()
});

function* create(action){
  const { nome, endereco } = action.payload;
  const clientes = store.get();
  
  const newCliente = clientes 
    ? [ ...clientes, createNewCliente(nome, endereco)]
    : [ createNewCliente(nome, endereco) ];
  
  store.set(newCliente);
  yield put({ type: 'CREATE_CLIENTE_SUCCESS', payload: { cliente: newCliente } } );
}

function* read(){

  yield put({ type: 'READ_CLIENTES_SUCCESS', payload: { clientes: store.get() } });
}

export default function* sagas(){
  yield takeLatest(types.CREATE_CLIENTE, create);
  yield takeLatest(types.READ_CLIENTES, read);
}
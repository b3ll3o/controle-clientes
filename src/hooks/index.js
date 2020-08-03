import { useDispatch, useSelector } from "react-redux"
import actions from '../store/actions';
import { useEffect } from "react";

import { isListaVazia } from '../utils/list';

export const useAddCliente = (nome, endereco) => {

  const dispatch = useDispatch();

  const addCliente = e => {
    e.preventDefault();
    dispatch(actions.create({ nome, endereco }));
  }

  return addCliente;
}

export const useGetClientes = () => {

  const dispatch = useDispatch();

  useEffect(() => {

    const fetch = () => {
      dispatch(actions.read())
    }

    fetch();
  }, [ dispatch ]);
}

export const useEditCliente = (id, nomeEditado, enderecoEditado) => {

  useGetClientes();

  const dispatch = useDispatch();

  const { nome, endereco } = useSelector(state => isListaVazia(state.clientes)
    ? { nome: '', endereco: '' }
    : state.clientes.filter(cliente => cliente.id === id)[0]);

  const setDefault = valor => novoValor => (
    novoValor === '' || novoValor === undefined || novoValor === null
      ? valor
      : novoValor
  );

  const setNome = setDefault(nome);
  const setEndereco = setDefault(endereco);

  const editCliente = e => {
    e.preventDefault();

    dispatch(actions.edit({
      id, 
      nome: setNome(nomeEditado), 
      endereco: setEndereco(enderecoEditado)
    }));
  }

  return [ nome, endereco, editCliente ];
}

export const useDeleteCliente = id => {

  useGetClientes();

  const dispatch = useDispatch();

  const deleteCliente = () => {
    dispatch(actions.delete(id))
  }

  return deleteCliente;
}
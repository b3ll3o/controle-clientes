import { useDispatch } from "react-redux"
import actions from '../store/actions';
import { useEffect } from "react";

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
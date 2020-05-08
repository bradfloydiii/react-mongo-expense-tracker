import React, { createContext, useReducer } from 'react';
import axios from 'axios';
import AppReducer from './AppReducer';

const Store = {
  transactions: [
    // { id: 1, text: 'Flower', amount: -20 },
    // { id: 2, text: 'Salary', amount: 300 },
    // { id: 3, text: 'Book', amount: -10 },
    // { id: 4, text: 'Camera', amount: 150 },
  ],
  error: null,
  loading: true,
};

export const StoreContext = createContext(Store);
export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, Store);

  const getTransactions = async () => {
    try {
      const res = await axios.get('/api/v1/transactions');
      dispatch({
        type: 'GET_TRANSACTIONS',
        payload: res.data.data,
      });
    } catch (error) {
      dispatch({
        type: 'TRANSACTION_ERROR',
        payload: { message: 'whatever' },
      });
    }
  };
  const deleteTransaction = async (id) => {
    try {
      await axios.delete(`/api/v1/transactions/${id}`);
      dispatch({
        type: 'DELETE_TRANSACTION',
        payload: id,
      });
    } catch (error) {
      dispatch({
        type: 'TRANSACTION_ERROR',
        payload: { message: 'whatever' },
      });
    }
  };

  const addTransaction = async (transaction) => {
    // const config = {
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    // };

    try {
      await axios.post('/api/v1/transactions', transaction);
      dispatch({
        type: 'ADD_TRANSACTION',
        payload: transaction,
      });
    } catch (error) {
      dispatch({
        type: 'TRANSACTION_ERROR',
        payload: { message: 'whatever' },
      });
    }
  };

  return (
    <StoreContext.Provider
      value={{
        transactions: state.transactions,
        error: state.error,
        loading: state.loading,
        getTransactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

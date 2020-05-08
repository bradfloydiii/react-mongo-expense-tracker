import React, { useContext } from 'react';
import { StoreContext } from '../context/Store';

export const Balance = () => {
  const { transactions } = useContext(StoreContext);

  const amounts = transactions.map(transaction => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <>
      <h4>Your Balance</h4>
      <h1>${total}</h1>
    </>
  );
};

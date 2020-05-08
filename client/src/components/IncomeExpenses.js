import React, { useContext } from 'react';
import { StoreContext } from '../context/Store';

export const IncomeExpenses = () => {
  const { transactions } = useContext(StoreContext);
  const amounts = transactions.map((transaction) => transaction.amount);

  const income = amounts
    .filter((transaction) => transaction > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);
  const expense = Math.abs(
    amounts
      .filter((transaction) => transaction < 0)
      .reduce((acc, item) => (acc += item), 0)
      .toFixed(2)
  );

  return (
    <div className='inc-exp-container'>
      <div>
        <h4>Income</h4>
        <p className='money plus'>+${income}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className='money minus'>-${expense}</p>
      </div>
    </div>
  );
};

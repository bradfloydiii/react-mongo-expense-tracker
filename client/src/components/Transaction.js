import React, { useContext } from 'react';
import { StoreContext } from '../context/Store';

export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(StoreContext);
  const sign = transaction.amount < 0 ? '-' : '+';
  return (
    <>
      <li
        key={transaction.id}
        className={transaction.amount < 0 ? 'minus' : 'plus'}
      >
        {transaction.text}{' '}
        <span>
          {sign}${Math.abs(transaction.amount)}
        </span>
        <button className='delete-btn' onClick={() => deleteTransaction(transaction._id)}>x</button>
      </li>
    </>
  );
};

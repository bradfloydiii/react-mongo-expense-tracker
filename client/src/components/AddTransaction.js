import React, { useState, useContext } from 'react';
import { StoreContext } from '../context/Store';

export const AddTransaction = () => {
  const { addTransaction } = useContext(StoreContext);
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const generateID = () => {
    return Math.floor(Math.random() * 100000000);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: generateID,
      text,
      amount,
    };
    addTransaction(newTransaction);

    setText('');
    setAmount(0);
  };

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className='form-control'>
          <label htmlFor='text'>Text</label>
          <input
            type='text'
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder='Enter text...'
          />
        </div>
        <div className='form-control'>
          <label htmlFor='amount'>
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type='number'
            value={amount}
            onChange={(e) => setAmount(+e.target.value)}
            placeholder='Enter amount...'
          />
        </div>
        <button className='btn'>Add transaction</button>
      </form>
    </>
  );
};

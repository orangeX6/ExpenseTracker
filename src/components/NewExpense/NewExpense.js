import React from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const saveExpense = (data) => {
    const expenseData = {
      id: Date.now(),
      ...data,
    };

    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onFormSubmit={saveExpense} />
    </div>
  );
};

export default NewExpense;

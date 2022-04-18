import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const [formVisibility, setFormVisibility] = useState(false);

  const saveExpense = (data) => {
    const expenseData = {
      id: Date.now(),
      ...data,
    };

    props.onAddExpense(expenseData);
    setFormVisibility(!formVisibility);
  };

  const toggleHandler = () => {
    setFormVisibility(!formVisibility);
  };

  return (
    <div className="new-expense">
      {!formVisibility && (
        <button onClick={toggleHandler}>Add New Expense</button>
      )}
      {formVisibility && (
        <ExpenseForm onFormSubmit={saveExpense} onCancel={toggleHandler} />
      )}
    </div>
  );
};

export default NewExpense;

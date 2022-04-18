import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import ExpenseFilter from './ExpenseFilter';
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = ({ expenses }) => {
  const [filterYear, setFilterYear] = useState('2021');

  const filterYearHandler = (year) => {
    setFilterYear(year);
  };

  // const getExpenses = (expenses) =>
  //   expenses.map((expense) => (
  //     <ExpenseItem
  //       title={expense.title}
  //       key={expense.id}
  //       amount={expense.amount}
  //       date={expense.date}
  //     />
  //   ));

  console.log(filterYear);
  const getExpenses = (expenses) =>
    filterYear !== 'null'
      ? expenses
          .filter((expense) => {
            return (
              new Date(expense.date).getFullYear().toString() === filterYear
            );
          })
          .map((expense) => (
            <ExpenseItem
              title={expense.title}
              key={expense.id}
              amount={expense.amount}
              date={expense.date}
            />
          ))
      : expenses.map((expense) => (
          <ExpenseItem
            title={expense.title}
            key={expense.id}
            amount={expense.amount}
            date={expense.date}
          />
        ));

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter year={filterYear} onValueChange={filterYearHandler} />
        {getExpenses(expenses)}
      </Card>
    </div>
  );
};

export default Expenses;

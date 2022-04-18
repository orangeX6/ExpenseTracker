import React, { useState } from 'react';

import ExpenseList from './ExpenseList';
import ExpenseFilter from './ExpenseFilter';
import ExpensesChart from './ExpensesChart';
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = ({ expenses }) => {
  const [filterYear, setFilterYear] = useState('2021');

  const filterYearHandler = (year) => {
    setFilterYear(year);
  };

  const filteredExpenses = expenses.filter((expense) => {
    if (filterYear === 'null') return expenses;
    return new Date(expense.date).getFullYear().toString() === filterYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter year={filterYear} onValueChange={filterYearHandler} />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpenseList expenses={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;

//>> Some cool sols
//-> 1
// console.log(filterYear);
// const getExpenses = (expenses) =>
//   filterYear !== 'null'
//     ? expenses
//         .filter((expense) => {
//           return (
//             new Date(expense.date).getFullYear().toString() === filterYear
//           );
//         })
//         .map((expense) => (
//           <ExpenseItem
//             title={expense.title}
//             key={expense.id}
//             amount={expense.amount}
//             date={expense.date}
//           />
//         ))
//     : expenses.map((expense) => (
//         <ExpenseItem
//           title={expense.title}
//           key={expense.id}
//           amount={expense.amount}
//           date={expense.date}
//         />
//       ));

//----------------------------------------------------------------
//-> 2
// const getExpenses = (expenses) => {
//   if (filterYear === 'null' && expenses.length > 0)
//     return expenses.map((expense) => (
//       <ExpenseItem
//         title={expense.title}
//         key={expense.id}
//         amount={expense.amount}
//         date={expense.date}
//       />
//     ));

//   const filteredExpenses = expenses.filter(
//     (expense) =>
//       new Date(expense.date).getFullYear().toString() === filterYear
//   );

//   return filteredExpenses.length === 0 ? (
//     <p>No Expenses Found</p>
//   ) : (
//     filteredExpenses.map((expense) => (
//       <ExpenseItem
//         title={expense.title}
//         key={expense.id}
//         amount={expense.amount}
//         date={expense.date}
//       />
//     ))
//   );
// };

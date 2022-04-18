import ExpenseItem from './ExpenseItem';
import ExpenseFilter from './ExpenseFilter';
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = ({ expenses }) => {
  const getExpenses = (expenses) =>
    expenses.map((expense) => {
      return (
        <ExpenseItem
          title={expense.title}
          key={expense.id}
          amount={expense.amount}
          date={expense.date}
        />
      );
    });

  const getYear = (year) => {
    console.log(year);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter onValueChange={getYear} />
        {getExpenses(expenses)}
      </Card>
    </div>
  );
};

export default Expenses;

import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from '../ExpsensesFilter/ExpsensesFilter';
import './Expenses.css';
import Card from '../UI/Card';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');
  const filterDataHandler = (filter) => {
    setFilteredYear(filter);
    // console.log(filter);
  };
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  let expensesContent = <p>No expenses found.</p>;
  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onFilterChange={filterDataHandler}
        />
        {expensesContent}
      </Card>
    </div>
  );
};
export default Expenses;

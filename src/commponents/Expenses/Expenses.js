import React, { useState } from 'react';
import ExpensesList from './ExpensesList';
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

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onFilterChange={filterDataHandler}
        />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};
export default Expenses;

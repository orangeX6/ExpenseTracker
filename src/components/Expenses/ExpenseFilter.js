import React, { useState } from 'react';

import './ExpenseFilter.css';

const ExpensesFilter = (props) => {
  const [year, setYear] = useState(2022);

  const getYear = (e) => {
    setYear(e.target.value);

    props.onValueChange(year);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select onChange={getYear} value={year}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;

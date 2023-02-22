import React from 'react';

import './ExpenseFilter.css';

const ExpensesFilter = (props) => {
  function filterChange(e){
    const selectYear = e.target.value;
    props.onSelectYear(selectYear);
  }

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={props.selected} onChange={filterChange}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
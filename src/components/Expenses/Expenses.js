import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesChart from "./ExpensesChart";

export default function Expenses(props) {
  const [selectYear, setSelectYear] = useState("2020");

  function onSelectYearHandler(yearData) {
    const currentYear = yearData;
    setSelectYear(currentYear);
  }

  const filteredItems = props.expenses.filter((item) => {
    return item.date.getFullYear().toString() === selectYear;
  });

  return (
    <Card className="expenses">
      <ExpenseFilter onSelectYear={onSelectYearHandler} selected={selectYear} />
      <ExpensesChart expenses={filteredItems}/>
      {filteredItems.length === 0 ? (
        <p>No expenses were found</p>
      ) : (
        filteredItems.map((item) => (
          <ExpenseItem
            key={item.id}
            title={item.title}
            amount={item.amount}
            date={item.date}
          />
        ))
      )}
    </Card>
  );
}

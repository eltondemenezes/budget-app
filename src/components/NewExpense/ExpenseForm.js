import React, { useState } from "react";
import "./ExpenseForm.css";

export default function ExpenseForm(props) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  // const [formInput, setFormInput] = useState({
  //   title: '',
  //   amount: '',
  //   date: ''
  // })

  function titleChange(e) {
    setTitle(e.target.value);
    // setFormInput({
    //   ...formInput,
    //   title: e.target.value
    // })
    // setFormInput((prevState) => {
    //   return {...prevState, title: e.target.value}
    // })
  }

  function amountChange(e) {
    setAmount(e.target.value);
  }

  function dateChange(e) {
    setDate(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const expenseData = {
      title: title,
      amount: +amount,
      date: new Date(date),
    };

    props.onSaveExpenseForm(expenseData);
    setTitle("");
    setAmount("");
    setDate("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={title} onChange={titleChange} />
        </div>
        <div className="new-expense__control">
          <label>Amout</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={amount}
            onChange={amountChange}
          />
        </div>
        <div className="new-expense__control">
          <label>date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={date}
            onChange={dateChange}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={props.cancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

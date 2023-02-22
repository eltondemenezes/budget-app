import React, {useState} from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import ExpenseFormButton from "./ExpenseFormButton";

export default function NewExpense(props) {
  const [addExpense, setAddExpense] = useState(false);

  function SaveExpenseFormHandler(enteredExpense) {
    const expenseData = {
      ...enteredExpense,
      id: Math.random().toString(),
    };
    props.onNewExpense(expenseData);
  }

  function handleFormClick(){
    setAddExpense(prevState => !prevState);
  }

  return (
    <div className="new-expense">
      {addExpense ? (
        <ExpenseForm onSaveExpenseForm={SaveExpenseFormHandler} cancel={handleFormClick}/>
      ) : (
        <ExpenseFormButton onClick={handleFormClick} />
      )}
    </div>
  );
}

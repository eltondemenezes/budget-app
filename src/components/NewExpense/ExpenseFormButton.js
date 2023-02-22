import React from "react";
import "./ExpenseForm.css"

export default function ExpenseFormButton(props){
    return (
        <div>
            <button onClick={props.onClick}>Add New Expense</button>
        </div>
    )
}
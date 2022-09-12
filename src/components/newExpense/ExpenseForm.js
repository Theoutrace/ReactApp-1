import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredtitle, setEnteredtitle] = useState("");
  const [enteredAmount, SetEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangehandler = (event) => {
    setEnteredtitle(event.target.value);
  };

  const amountChangehandler = (event) => {
    SetEnteredAmount(event.target.value);
  };

  const dateChangehandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredtitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    // console.log(expenseData);

    props.onSaveExpenseData(expenseData);

    // clearing the field -------------------------------
    setEnteredtitle("");
    SetEnteredAmount("");
    setEnteredDate("");

  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredtitle}
            onChange={titleChangehandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            steps="0.01"
            value={enteredAmount}
            onChange={amountChangehandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangehandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;

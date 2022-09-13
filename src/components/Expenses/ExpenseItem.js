import React, { useState } from "react";

import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.exp.title);
  const [amount, setAmount] = useState(props.exp.amount);

  const clickDeleteHandler = () => {
    setAmount("100");
  };

  const clickHandler = () => {
    setTitle("updated");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.exp.date} />
      <div className="expense-item__description">
        <ExpenseDetails ttl={props.exp.title} amt={props.exp.amount} />
      </div>
      <button onClick={clickHandler}>Change Title</button>
      <button onClick={clickDeleteHandler}>Change expense</button>
    </Card>
  );
};

export default ExpenseItem;

// Done card

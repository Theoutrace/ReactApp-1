import React, { useState } from "react";

import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  const [amount, setAmount] = useState(props.amount);

  const clickDeleteHandler = () =>{
    setAmount('100')
    
  }

  const clickHandler = () => {
    setTitle('updated');
    // console.log(title);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <ExpenseDetails title={title} amount={amount} />
        {/* <h4>{props.LocationOfExpenditure}</h4> */}
      </div>
      <button onClick={clickHandler}>Change Title</button>
      <button onClick={clickDeleteHandler}>Change expense</button>
    </Card>
  );
};

export default ExpenseItem;

// Done card

import React, { useState } from "react";

import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);

  const clickDeleteHandler = () =>{
    console.log('targetToDelete');
    
  }

  const clickHandler = () => {
    setTitle('updated');
    // console.log(title);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <ExpenseDetails title={title} amount={props.amount} />
        {/* <h4>{props.LocationOfExpenditure}</h4> */}
      </div>
      <button onClick={clickHandler}>Change Title</button>
      <button onClick={clickDeleteHandler}>Delete Expense</button>
    </Card>
  );
};

export default ExpenseItem;

// Done card

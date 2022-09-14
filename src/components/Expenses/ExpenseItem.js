import React from "react";

import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/Card";

const ExpenseItem = (props) => {

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.exp.date} />
      <div className="expense-item__description">
        <ExpenseDetails ttl={props.exp.title} amt={props.exp.amount} />
      </div>
    </Card>
  );
};

export default ExpenseItem;

// Done card

import React from "react";
import Card from "../UI/Card";
import "./ExpenseDetails.css";

const ExpenseDetails = (props) => {
  return (
    <Card className="expenseDetails-div">
      <h2>{props.title}</h2>
      <Card className="expense-item__price">${props.amount}</Card>
    </Card>
  );
};

export default ExpenseDetails;

// Done card

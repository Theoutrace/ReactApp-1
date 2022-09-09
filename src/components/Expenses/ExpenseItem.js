import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/Card";


const ExpenseItem = (props) => {


  return (
    <Card className="expense-item">
    <ExpenseDate date={props.date}/>
      <Card className="expense-item__description">
        <ExpenseDetails title = {props.title} amount = {props.amount}/>
        <h4>{props.LocationOfExpenditure}</h4>
      </Card>
    </Card>
  );
}

export default ExpenseItem;

// Done card
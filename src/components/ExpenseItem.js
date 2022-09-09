import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";

function ExpenseItem(props) {


  return (
    <div className="expense-item">
    <ExpenseDate date={props.date}/>
    <ExpenseDetails title = {props.title} amount = {props.amount}/>
      <div className="expense-item__description">
        <h4>{props.LocationOfExpenditure}</h4>
      </div>
    </div>
  );
}

export default ExpenseItem;

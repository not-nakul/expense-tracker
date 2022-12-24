import ExpenseDate from "./ExpenseDate";

import classes from "./ExpenseItem.module.css";

const ExpenseItem = (props) => {
  return (
    <li className={classes["expense-item"]}>
      <ExpenseDate date={props.date} />
      <div className={classes["expense-item__description"]}>
        <h2>{props.title}</h2>
        <div className={classes["expense-item__price"]}>
          &#x20B9; {props.amount}
        </div>
      </div>
    </li>
  );
};

export default ExpenseItem;

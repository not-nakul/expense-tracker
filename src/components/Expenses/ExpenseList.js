import ExpenseItem from "./ExpenseItem";

import classes from "./ExpenseList.module.css";

const ExpenseList = (props) => {
  if (props.expenses.length === 0) {
    return (
      <h2 className={classes["expenses-list__fallback"]}>
        No data found, try adding some.
      </h2>
    );
  }

  return (
    <ul className={classes["expenses-list"]}>
      {props.expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          date={expense.date}
          amount={expense.amount}
        />
      ))}
    </ul>
  );
};

export default ExpenseList;

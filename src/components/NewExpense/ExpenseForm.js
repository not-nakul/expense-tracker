import { useState } from "react";

import classes from "./ExpenseForm.module.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleInputHandler = (event) => setEnteredTitle(event.target.value);
  const amountInputHandler = (event) => setEnteredAmount(event.target.value);
  const dateInputHandler = (event) => setEnteredDate(event.target.value);

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (enteredTitle === "" || enteredAmount === "" || enteredDate === "") {
      return;
    }

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    props.getExpense(expenseData);

    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={classes["new-expense__controls"]}>
        <div className={classes["new-expense__control"]}>
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleInputHandler}
          />
        </div>

        <div className={classes["new-expense__control"]}>
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountInputHandler}
          />
        </div>

        <div className={classes["new-expense__control"]}>
          <label>Date</label>
          <input
            type="date"
            min="2021-01-01"
            max="2023-12-31"
            value={enteredDate}
            onChange={dateInputHandler}
          />
        </div>
      </div>

      <div className={classes["new-expense__actions"]}>
        <button type="button" onClick={props.cancelForm}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;

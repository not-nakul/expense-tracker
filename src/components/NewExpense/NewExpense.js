import { useState } from "react";

import ExpenseForm from "./ExpenseForm";

import classes from "./NewExpense.module.css";

const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false);

  const showFormHandler = () => {
    setShowForm((prevState) => !prevState);
  };

  return (
    <div className={classes["new-expense"]}>
      {!showForm && <button onClick={showFormHandler}>Add New Expense</button>}
      {showForm && (
        <ExpenseForm
          cancelForm={showFormHandler}
          getExpense={props.getExpense}
        />
      )}
    </div>
  );
};

export default NewExpense;

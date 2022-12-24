import { useState } from "react";

import ExpenseChart from "./ExpenseChart";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";

import classes from "./Expenses.module.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2022");

  const onFilterChange = (selectedYear) => setFilteredYear(selectedYear);

  const filteredExpenses = props.expenses.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );

  return (
    <div className={classes["expenses"]}>
      <ExpenseFilter
        changeFilter={onFilterChange}
        filteredYear={filteredYear}
      />

      <ExpenseChart expenses={filteredExpenses} />

      <ExpenseList expenses={filteredExpenses} />
    </div>
  );
};

export default Expenses;

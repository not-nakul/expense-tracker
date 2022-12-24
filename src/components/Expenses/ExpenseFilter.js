import classes from "./ExpenseFilter.module.css";

const ExpenseFilter = (props) => {
  const filterChangeHandler = (event) => {
    const filteredYear = event.target.value;

    props.changeFilter(filteredYear);
  };

  return (
    <div className={classes["expenses-filter"]}>
      <div className={classes["expenses-filter__control"]}>
        <label>Filter by year</label>
        <select value={props.filteredYear} onChange={filterChangeHandler}>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;

import { useState } from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Groceries",
    amount: 894.12,
    date: new Date(2022, 7, 14),
  },
  {
    id: "e2",
    title: "Curtains",
    amount: 2399.63,
    date: new Date(2022, 6, 10),
  },
  {
    id: "e3",
    title: "Clothes",
    amount: 5943.33,
    date: new Date(2022, 9, 26),
  },
  {
    id: "e4",
    title: "Bicycle",
    amount: 10000.65,
    date: new Date(2022, 11, 21),
  },
  {
    id: "e5",
    title: "Smart Television",
    amount: 22999.99,
    date: new Date(2021, 2, 12),
  },
  {
    id: "e6",
    title: "Car Insurance",
    amount: 12395.65,
    date: new Date(2021, 3, 28),
  },
  {
    id: "e7",
    title: "Wooden Desk",
    amount: 5599.99,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const getExpenseData = (expenseData) => {
    const newExpenseData = {
      ...expenseData,
      id: Math.random().toString(),
    };

    setExpenses((previousExpenses) => {
      return [newExpenseData, ...previousExpenses];
    });
  };

  return (
    <>
      <NewExpense getExpense={getExpenseData} />
      <Expenses expenses={expenses} />
    </>
  );
};

export default App;

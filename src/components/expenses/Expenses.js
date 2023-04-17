import React, { useState } from "react";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import Chart from "../Chart/Chart";
import { ExpenseItem } from "../ExpensesItem/ExpensesItem";

export const Expenses = ({ expenses, setExpenses }) => {

  const [selectedYear, setSelectYear] = useState("2022");

  const yearChangeHandler = (event) => {
    setSelectYear(event.target.value);
  };

  const filteredItems = expenses.filter((element) => {
    const stringifiedYear = new Date(element.date).getFullYear().toString();
    return stringifiedYear === selectedYear;
  });

  console.log("filteredItems", filteredItems);
  console.log("expenses", expenses);

  return (
    <>
      <div className="expenses">
        <ExpensesFilter
          expenses={expenses}
          setExpenses={setExpenses}
          value={selectedYear}
          onChange={yearChangeHandler}
        />
        <Chart items={filteredItems} />

        {filteredItems.map((el, index) => {
          return <ExpenseItem el={el} key={index} />;
        })}
      </div>
    </>
  );
};

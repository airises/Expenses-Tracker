import React, { useState } from "react";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import Chart from "../Chart/Chart";
import { ExpenseItem } from "../ExpensesItem/ExpensesItem";
import styled from "styled-components";

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
      <ExpensesCont>
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
      </ExpensesCont>
    </>
  );
};

const ExpensesCont = styled.div`
  width: 780px;
  padding: 28px 16px;
  background: #1f1f1f;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  margin-top: 26px;
`;

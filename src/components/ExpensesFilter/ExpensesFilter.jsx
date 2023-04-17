import React from "react";
import "./ExpensesFilter.css";
// import Buttons from "../UI/Button";
import styled from "styled-components";

function ExpensesFilter({ value, onChange, expenses, setExpenses }) {

  const desceding = () => {
    setExpenses([
      ...expenses.sort((a, b) => {
        return new Date(a.date) - new Date(b.date);
      }),
    ]);
  };
  const ascending = () => {
    setExpenses([
      ...expenses.sort((a, b) => {
        return new Date(b.date) - new Date(a.date)
      }),
    ]);
  };
  return (
    <div className="expenses-filter">
      <div className="expenses-filter_control">
        <DescendingAndAscendingButtons
          onClick={desceding}
          className="descending"
        >
          Descending
        </DescendingAndAscendingButtons>
        <DescendingAndAscendingButtons
          onClick={ascending}
          className="ascending"
        >
          Ascending
        </DescendingAndAscendingButtons>
        <select value={value} onChange={onChange}>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
}

export default ExpensesFilter;

const DescendingAndAscendingButtons = styled.button`
  background-color: #dedede;
  padding: 15px 30px 15px 30px;
  border-radius: 10px;
  border: none;
  font-size: 17px;
  color: #000;
  font-weight: 600;
  cursor: pointer;
`;

import React from "react";
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
        return new Date(b.date) - new Date(a.date);
      }),
    ]);
  };
  return (
    <ExpensesFilterr>
      <ExpensesFilterControl>
        <DescendingAndAscendingButtons onClick={desceding}>
          Descending
        </DescendingAndAscendingButtons>
        <DescendingAndAscendingButtons onClick={ascending}>
          Ascending
        </DescendingAndAscendingButtons>
        <ExpensesFilterSelect value={value} onChange={onChange}>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </ExpensesFilterSelect>
      </ExpensesFilterControl>
    </ExpensesFilterr>
  );
}

export default ExpensesFilter;

const ExpensesFilterr = styled.div`
  color: #ffffff;
  padding: 0 1rem;
`;

const ExpensesFilterControl = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin: 1rem 0;
`;

const ExpensesFilterSelect = styled.select`
  margin-left: 210px;
  font: inherit;
  padding: 0.5rem 2.5rem;
  font-weight: bold;
  border-radius: 6px;
  cursor: pointer;
`;

const DescendingAndAscendingButtons = styled.button`
  background-color: #dedede;
  padding: 15px 30px 15px 30px;
  border-radius: 10px;
  border: none;
  font-size: 17px;
  color: #000;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    background-color: #353232;
    color: #ffffff;
  }
  &:active {
    background-color: #dedede;
    color: #000;
  }
`;

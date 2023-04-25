import React from "react";
import Buttons from "../UI/Button";
import styled from "styled-components";
import { ExpenseForm } from "../expenseForm/ExpenseForm";
import { Expenses } from "../expenses/Expenses";
import App from "../../App";

function Header({ islogIn, setIslogIn, showExpenses, showUsers }) {
  const logOut = () => {
    setIslogIn(false);
    localStorage.removeItem("keys");
  };

  return (
    <DivButtons>
      {islogIn ? (
        <div>
          <App />
          <Expenses />
        </div>
      ) : (
        <>
          <Buttons onClick={showExpenses}>Expenses</Buttons>
          <Buttons onClick={showUsers}> Users</Buttons>
          <Buttons onClick={logOut}>Log Out</Buttons>{" "}
        </>
      )}
    </DivButtons>
  );
}

export default Header;

const DivButtons = styled.div`
  display: flex;
  gap: 30px;
  justify-content: end;
  align-items: center;
  background-color: #ad9be9;
  width: 100%;
  height: 10vh;
`;

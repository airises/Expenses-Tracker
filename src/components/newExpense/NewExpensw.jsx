import styled from "styled-components";
import React, { useState } from "react";
import Buttons from "../UI/Button";
import { ExpenseForm } from "../expenseForm/ExpenseForm";
export { useState } from "react";

export const NewExpensw = ({ onNewExpenseAdd }) => {
  const [state, setState] = useState(false);

  function openAndCloseFormHadler() {
    setState((prev) => !prev);
  }

  return (
    <div>
      {state ? (
        <ExpenseForm
          onNewExpenseAdd={onNewExpenseAdd}
          onClick={openAndCloseFormHadler}
        />
      ) : (
        <ButtonDiv>
          <Buttons onClick={openAndCloseFormHadler}>Add a new expense</Buttons>
        </ButtonDiv>
      )}
    </div>
  );
};
const ButtonDiv = styled.div`
  background-color: #ad9be9;
  height: 100px;
  width: 810px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  margin-top: 50px;
`;


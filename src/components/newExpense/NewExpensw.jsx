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
        <div
          style={{
            backgroundColor: "#AD9BE9 ",
            height: "100px",
            width: "810px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "12px",
            marginTop: "50px",
          }}
        >
          <Buttons onClick={openAndCloseFormHadler}>Add a new expense</Buttons>
        </div>
      )}
    </div>
  );
};

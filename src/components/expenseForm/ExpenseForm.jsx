import React, { useState } from "react";
import Input from "../UI/Input";
import Buttons from "../UI/Button";
import "./expenseForm.css";

export const ExpenseForm = ({ onClick, onNewExpenseAdd }) => {
  const [inputText, setInputText] = useState("");
  const [inputNumber, setInputNumber] = useState(0);
  const [inputDate, setInputDate] = useState("");

  function getInputValue(e) {
    setInputText(e.target.value);
  }

  function getInputNumber(e) {
    const value = e.target.value;
    if (value.charAt(0) !== "-") {
      setInputNumber(value);
    }
  }

  function getInputDate(e) {
    setInputDate(e.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
    const product = {
      title: inputText,
      price: +inputNumber,
      date: new Date(inputDate),
      id: Date.now().toString(),
    };

    onNewExpenseAdd(product);

    console.log(product, "taken");
  }

  return (
    <div className="main-divContainer">
      <form onSubmit={submitHandler} className="formContainer">
        <div className="input-div">
          <Input
            id="1"
            children="Heading "
            type="text"
            placeholder="Heading"
            value={inputText}
            onChange={getInputValue}
          />
          <Input
            id="2"
            children="Quantity"
            type="number"
            placeholder="Quantiy"
            min="0.01"
            step="0.01"
            value={inputNumber}
            onChange={getInputNumber}
          />
          <Input
            id="3"
            children="Date"
            type="date"
            min="2019-01-01"
            max="2025-12-31"
            value={inputDate}
            onChange={getInputDate}
          />
        </div>
        <div className="buttonContainer">
          <Buttons onClick={onClick}>Cancel</Buttons>
          <Buttons>Add expenses</Buttons>
        </div>
      </form>
    </div>
  );
};

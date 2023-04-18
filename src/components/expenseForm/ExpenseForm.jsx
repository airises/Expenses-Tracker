import React, { useState } from "react";
import Input from "../UI/Input";
import Buttons from "../UI/Button";
import styled from "styled-components";

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
    <div>
      <FormContainer onSubmit={submitHandler}>
        <InputDiv>
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
        </InputDiv>
        <ButtonCont>
          <Buttons onClick={onClick}>Cancel</Buttons>
          <Buttons>Add expenses</Buttons>
        </ButtonCont>
      </FormContainer>
    </div>
  );
};

const FormContainer = styled.form`
  width: 730px;
  background-color: #ad9be9;
  border-radius: 12px;
  padding: 30px 40px;
  margin-top: 60px;
`;

const InputDiv = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  align-items: center;
`;

const ButtonCont = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 14px;
`;

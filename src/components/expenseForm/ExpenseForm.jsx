import React, { useEffect, useRef, useState } from "react";
import Input from "../UI/Input";
import Buttons from "../UI/Button";
import styled from "styled-components";

export const ExpenseForm = ({ onNewExpenseAdd }) => {
  const headingValue = useRef();
  const quantityValue = useRef();
  const dateValue = useRef();

  function submitHandler(event) {
    event.preventDefault();
    const product = {
      id: Date.now().toString(),
      title: headingValue.current.value,
      price: quantityValue.current.value,
      date: new Date(dateValue.current.value),
    };

    onNewExpenseAdd(product);

    console.log(product, "taken");

    headingValue.current.value = "";
    quantityValue.current.value = "";
    dateValue.current.value = "";
  }

  return (
    <div>
      <FormContainer onSubmit={submitHandler}>
        <InputDiv>
          <Input
            id="1"
            ref={headingValue}
            children="Heading "
            type="text"
            placeholder="Heading"
          />
          <Input
            id="2"
            children="Quantity"
            type="number"
            placeholder="Quantiy"
            min="0.01"
            step="0.01"
            ref={quantityValue}
          />
          <Input
            id="3"
            children="Date"
            type="date"
            min="2019-01-01"
            max="2025-12-31"
            ref={dateValue}
          />
        </InputDiv>
        <ButtonCont>
          <Buttons type="submit" >Add expenses</Buttons>
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

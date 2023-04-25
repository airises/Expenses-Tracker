import React, { forwardRef } from "react";
import styled from "styled-components";

const Input = forwardRef((props, ref) => {
  return (
    <div>
      <div>
        <InputLabel htmlFor={props.id}>{props.children}</InputLabel>
        <InputCont
          type={props.type}
          id={props.id}
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.onChange}
          ref={ref}
        />
      </div>
    </div>
  );
});

export default Input;

const InputCont = styled.input`
  padding-right: 20px;
  padding-left: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
  padding-top: 15px;
  display: flex;
  background-color: #f7f7f7;
  color: #333333;
  border: 1px solid #cccccc;
  border-radius: 5px;
  font-size: 16px;
  box-sizing: border-box;
  width: 340px;
  text-align: left;
  background-color: #fafafa;
  border: none;
  &:hover {
    background-color: #f7f1de;
  }
  &:active {
    background-color: #fafafa;
  }
`;

const InputLabel = styled.label`
  font-size: 25px;
  font-weight: 500;
`;

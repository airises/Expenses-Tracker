import React from "react";
import styled from "styled-components";

function Buttons({ children, ...otherProps }) {
  return (
    <div>
      <Btn {...otherProps}>{children}</Btn>
    </div>
  );
}

export default Buttons;

const Btn = styled.button`
  padding: 10px 18px 10px 15px;
  border-radius: 10px;
  background-color: #4a026b;
  border: none;
  font-size: 17px;
  color: #ffffff;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    background-color: #861ecbbc;
    color: rgb(20, 17, 17);
  }
  &:active {
    background-color: #4a026b;
    color: #ffffff;
  }
`;

import React from "react";
import styled from "styled-components";

export const ExpensesCard = ({ el }) => {
  const dateMonth = new Date(el.date).toLocaleString("en-US", {
    month: "long",
  });

  const dateFullYear = new Date(el.date).getFullYear();
  const date = new Date(el.date).getDate();

  return (
    <div>
      <MainCard>
        <DateDiv>
          <span>{dateMonth}</span>
          <span>{dateFullYear}</span>

          <DateSpan>{date}</DateSpan>
        </DateDiv>
        <Containers>
          <HeadingTitle>
            <h2>{el.title}</h2>
          </HeadingTitle>
          <PriceCardDiv>
            <PriceSpan> {el.price}$</PriceSpan>
          </PriceCardDiv>
        </Containers>
      </MainCard>
    </div>
  );
};

const MainCard = styled.div`
  width: 748px;
  height: 110px;
  background: #4b4b4b;
  border-radius: 12px;
  margin-top: 20px;
  display: flex;
  margin-left: 17px;
`;

const DateDiv = styled.div`
  color: #ffffff;
  width: 90px;
  height: 90px;
  background: #2a2a2a;
  border: 1px solid #ffffff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  margin-left: 1rem;
`;

const DateSpan = styled.span`
  font-weight: 600;
  font-size: 25px;
`;

const Containers = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-right: 1rem;
  align-items: center;
`;

const HeadingTitle = styled.div`
  margin-left: 14px;
  color: #ffffff;
`;

const PriceCardDiv = styled.div`
  padding: 10px 18px 10px 15px;
  border-radius: 10px;
  background-color: #4a026b;
  border: none;
  font-size: 17px;
  color: #ffffff;
  font-weight: 500;
  border: 1px solid #ffffff;
`;

const PriceSpan = styled.span`
  padding: 10px 18px;
  border-radius: 10px;
  font-weight: bold;
  font-size: 20px;
`;

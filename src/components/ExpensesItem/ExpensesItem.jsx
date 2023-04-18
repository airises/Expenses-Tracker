import React from "react";
import styled from "styled-components";

export const ExpenseItem = ({ el }) => {
  const dateMonth = new Date(el.date).toLocaleString("en-US", {
    month: "long",
  });
  const dateFullYear = new Date(el.date).getFullYear();
  const date = new Date(el.date).getDate();
  return (
    <>
      <div>
        <Card>
          <DateBlock>
            <span>{dateMonth}</span>
            <span>{dateFullYear}</span>

            <SpanDate>{date}</SpanDate>
          </DateBlock>
          <AllContainers>
            <CardTitle>
              <h2>{el.title}</h2>
            </CardTitle>
            <PriceCardDiv>
              <PriceCard >{el.price}$</PriceCard>
            </PriceCardDiv>
          </AllContainers>
        </Card>
      </div>
    </>
  );
};

const Card = styled.div`
  width: 748px;
  height: 110px;
  background: #4b4b4b;
  border-radius: 12px;
  margin-top: 20px;
  display: flex;
  margin-left: 17px;
`;

const DateBlock = styled.div`
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
const SpanDate = styled.span`
  font-weight: 600;
  font-size: 25px;
`;
const AllContainers = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-right: 1rem;
  align-items: center;
`;

const CardTitle = styled.div`
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
const PriceCard = styled.span`
  padding: 10px 18px;
  border-radius: 10px;
  font-weight: bold;
  font-size: 20px;
`;

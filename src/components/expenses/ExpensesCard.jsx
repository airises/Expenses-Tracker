import React from "react";
import "./expensesCard.css";

export const ExpensesCard = ({ el }) => {
  const dateMonth = new Date(el.date).toLocaleString("en-US", {
    month: "long",
  });

  const dateFullYear = new Date(el.date).getFullYear();
  const date = new Date(el.date).getDate();

  return (
    <div className="main_card">
      <div className="card">
        <div className="date_block">
          <span>{dateMonth}</span>
          <span>{dateFullYear}</span>

          <span className="span-date">{date}</span>
        </div>
        <div className="allContainers">
          <div className=" card-title">
            <h2>{el.title}</h2>
          </div>
          <div className="price-card_div">
            <span className="price-card"> {el.price}$</span>
          </div>
        </div>
      </div>
    </div>
  );
};

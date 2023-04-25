import "./App.css";
import { useEffect, useState } from "react";
import { Expenses } from "./components/expenses/Expenses";
import { ExpenseForm } from "./components/expenseForm/ExpenseForm";
import Login from "./components/login/Login";
import Header from "./components/header/Header";
import styled from "styled-components";
import { Users } from "./components/users/Users";

function App() {
  const [islogIn, setIslogIn] = useState(false);
  const [showUser, setShowUser] = useState(false);
  const [expenses, setExpenses] = useState([
    {
      title: "Dress",
      price: 450,
      date: new Date(2023, 2, 19),
    },
    {
      title: "New TV",
      price: 800,
      date: new Date(2022, 11, 21),
    },
    {
      title: "Iphone 14 pro Max",
      price: 1500,
      date: new Date(2021, 8, 5),
    },
    {
      title: "Gucci bag",
      price: 990,
      date: new Date(2020, 1, 17),
    },
    {
      title: "Toilet Paper",
      price: 300,
      date: new Date(2022, 8, 9),
    },
    {
      title: "Shoes",
      price: 780,
      date: new Date(2021, 1, 27),
    },
    {
      title: "Headphones",
      price: 220,
      date: new Date(2019, 7, 14),
    },
    {
      title: "MacBook M2 Air",
      price: 1980,
      date: new Date(2023, 7, 31),
    },
    {
      title: "Chocolate-covered Strawberries",
      price: 340,
      date: new Date(2020, 0, 16),
    },
  ]);

  const addNewExpenseHandler = (data) => {
    const updatedExpenses = [...expenses];
    updatedExpenses.push(data);
    setExpenses(updatedExpenses);
  };

  useEffect(() => {
    const localstorageLogin = localStorage.getItem("keys");
    setIslogIn(localstorageLogin);

    const showusertolocal = localStorage.getItem("users");
    setShowUser(showusertolocal);
  }, [islogIn]);

  const logInHandler = () => {
    localStorage.setItem("keys", !islogIn);
    setIslogIn(!islogIn);
  };

  const showUsers = () => {
    setShowUser(true);
    localStorage.setItem("users", showUser);
  };
  const showExpenses = () => {
    setShowUser(false);
    localStorage.removeItem("users");
  };
  return (
    <div className="App">
      {islogIn ? (
        <>
          <Header
            setIslogIn={setIslogIn}
            isLogIn={islogIn}
            showUsers={showUsers}
            showExpenses={showExpenses}
          />

          <TwoDivs>
            {showUser ? (
              <Users />
            ) : (
              <>
                <ExpenseForm
                  onNewExpenseAdd={addNewExpenseHandler}
                  setExpenses={setExpenses}
                  expenses={expenses}
                />
                <Expenses setExpenses={setExpenses} expenses={expenses} />
              </>
            )}
          </TwoDivs>
        </>
      ) : (
        <>
          <Login onLogin={logInHandler} />
        </>
      )}
    </div>
  );
}

export default App;

const TwoDivs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

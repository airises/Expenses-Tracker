import React, { useEffect, useState } from "react";
import styled from "styled-components";

export const Users = () => {
  const [usersInfo, setUsersInfo] = useState([]);

  const getUsersIfo = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    console.log(response)
    const data = await response.json();
    setUsersInfo(data);
  };
  useEffect(() => {
    getUsersIfo();
  }, []);
  return (
    <div>
      {usersInfo.map((user) => {
        return (
          <MainDiv>
            <UsersDiv>
              <h2>{user.name}</h2>
              <h3>{user.id}</h3>
              <p>{user.email}</p>
            </UsersDiv>
          </MainDiv>
        );
      })}
    </div>
  );
};

const UsersDiv = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  border: 2px solid #fff;
  width: 320px;
  padding: 1rem;
  margin-top: 30px;
  color: #ffffff;
  background-color: #161414;
`;

const MainDiv = styled.div`
  display: flex;
  justify-content: center;
`;

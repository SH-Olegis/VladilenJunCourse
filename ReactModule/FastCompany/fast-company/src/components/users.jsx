import React from "react";
import api from "../api/index";

const Users = () => {
  const users = api.users.fetchAll();

  return <h1>Users</h1>;
};

export default Users;

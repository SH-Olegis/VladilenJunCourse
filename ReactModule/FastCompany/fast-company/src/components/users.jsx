import React, { useState } from "react";
import api from "../api/index";

const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll());
  const handleDelete = (id) => {
    const newUsers = users.filter((user) => user._id !== id);

    setUsers(newUsers);
  };

  const renderPhrase = () => {
    const countUsers = users.length;
    if (countUsers === 0) return "Никто с тобой не тусанет";

    let endPeoples = "";

    if (countUsers % 10 === 1) endPeoples = "человек";
    else if (
      countUsers % 10 >= 2 &&
      countUsers % 10 <= 4 &&
      (countUsers > 14 || countUsers < 5)
    )
      endPeoples = "человека";
    else endPeoples = "человек";

    return `${countUsers} ${endPeoples} тусанет с тобой сегодня`;
  };
  const renderBgPhrase = () => (users.length === 0 ? "danger" : "primary");
  return (
    <>
      <h2>
        <span className={`badge bg-${renderBgPhrase()}`}>{renderPhrase()}</span>
      </h2>
      <table
        className="table"
        style={{ display: users.length === 0 ? "none" : "" }}
      >
        <thead>
          <tr>
            <th scope="col">Имя</th>
            <th scope="col">Качества</th>
            <th scope="col">Профессия</th>
            <th scope="col">Встретился, раз</th>
            <th scope="col">Оценка</th>
            <th scope="col" />
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr key={user._id}>
                <th scope="row">{user.name}</th>
                <td>
                  {user.qualities.map((quality) => (
                    <span
                      key={quality._id}
                      className={`badge m-1 bg-${quality.color}`}
                    >
                      {quality.name}
                    </span>
                  ))}
                </td>
                <td>{user.profession.name}</td>
                <td>{user.completedMeetings}</td>
                <td>{user.rate}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      handleDelete(user._id);
                    }}
                  >
                    delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Users;

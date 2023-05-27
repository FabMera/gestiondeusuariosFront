import React, { useContext } from "react";
import UserRow from "./UserRow";
import { UserContext } from "../Context/userContext";

const UsersList = () => {
  const { users } = useContext(UserContext);
  return (
    <table className="table table-hover table-striped">
      <thead>
        <tr>
          <th>id</th>
          <th>username</th>
          <th>email</th>
          <th>update</th>
          <th>update route</th>
          <th>remove</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <UserRow
            key={user.id}
            id={user.id}
            username={user.username}
            email={user.email}
          />
        ))}
      </tbody>
    </table>
  );
};

export default UsersList;

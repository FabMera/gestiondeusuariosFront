import React from "react";
import UserRow from "./UserRow";

const UsersList = ({ users,handlerRemoveUser,handlerUpdateUser}) => {
  return (
    <>
    
      <table className="table table-hover table-striped">
        <thead>
          <tr>
            <th>id</th>
            <th>username</th>
            <th>email</th>
            <th>update</th>
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
              handlerRemoveUser={handlerRemoveUser}
              handlerUpdateUser={handlerUpdateUser}
            />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default UsersList;

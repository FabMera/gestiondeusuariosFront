import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../Context/userContext";

const UserRow = ({ id, username, email }) => {
  const { handlerRemoveUser, handlerUpdateUser, setMostrar } =
    useContext(UserContext);
  return (
    <>
      <tr>
        <td>{id}</td>
        <td>{username}</td>
        <td>{email}</td>
        <td>
          <button
            onClick={() => {
              handlerUpdateUser({ id, username, email });
              setMostrar(true);
            }}
            className="btn btn-sm btn-secondary btn-sm"
          >
            update
          </button>
        </td>
        <td>
          <NavLink
            onClick={() => setMostrar(false)}
            className="btn btn-secondary btn-sm"
            to={`/users/edit/${id}`}
          >
            update route
          </NavLink>
        </td>
        <td>
          <button
            onClick={() => handlerRemoveUser(id)}
            className="btn btn-sm btn-danger btn-sm"
          >
            remove
          </button>
        </td>
      </tr>
    </>
  );
};

export default UserRow;

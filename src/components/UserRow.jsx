import React from "react";

const UserRow = ({id,username,email,handlerRemoveUser,handlerUpdateUser}) => {

   
  return (
    <>
      <tr >
        <td>{id}</td>
        <td>{username}</td>
        <td>{email}</td>
        <td>
          <button onClick={()=>handlerUpdateUser({id,username,email})} className="btn btn-sm btn-warning btn-sm">update</button>
        </td>
        <td>
          <button onClick={()=>handlerRemoveUser(id)} className="btn btn-sm btn-danger btn-sm">remove</button>
        </td>
      </tr>
    </>
  );
};

export default UserRow;

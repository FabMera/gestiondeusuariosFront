import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../Context/userContext";
import { AuthContext } from "../auth/context/AuthContext";

const UserRow = ({ id, username, email, admin }) => {
    const { handlerRemoveUser, handlerUpdateUser, setMostrar } =
        useContext(UserContext);

    const { login } = useContext(AuthContext);
    return (
        <>
            <tr>
                <td>{id}</td>
                <td>{username}</td>
                <td>{email}</td>

                {login.isAdmin ? (
                    <>
                        <td>
                            <button
                                onClick={() => {
                                    handlerUpdateUser({
                                        id,
                                        username,
                                        email,
                                        admin,
                                    });
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
                    </>
                ) : null}
            </tr>
        </>
    );
};

export default UserRow;

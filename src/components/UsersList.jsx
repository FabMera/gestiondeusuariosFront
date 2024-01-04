import { useContext } from "react";
import UserRow from "./UserRow";
import { UserContext } from "../Context/userContext";
import { AuthContext } from "../auth/context/AuthContext";
import { useUsers } from "../hooks/useUsers";
import { useAuth } from "../auth/hooks/useAuth";

const UsersList = () => {
    //const { users } = useContext(UserContext);
    const { users } = useUsers();
    const {login} = useAuth();
    return (
        <table className="table table-hover table-striped">
            <thead>
                <tr>
                    <th>id</th>
                    <th>username</th>
                    <th>email</th>
                    {login.isAdmin ? (
                        <>
                            <th>update</th>
                            <th>update route</th>
                            <th>remove</th>
                        </>
                    ) : null}
                </tr>
            </thead>
            <tbody>
                {users.map((user) => (
                    <UserRow
                        key={user.id}
                        id={user.id}
                        username={user.username}
                        email={user.email}
                        admin={user.admin}
                    />
                ))}
            </tbody>
        </table>
    );
};

export default UsersList;

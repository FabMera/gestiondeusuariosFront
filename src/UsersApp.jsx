import UserForm from "./components/UserForm";
import UsersList from "./components/UsersList";
import { useUsers } from "./hooks/useUsers";

const UsersApp = () => {
  const {
    users,
    userSelected,
    initialUserForm,
    handlerAddUser,
    handlerRemoveUser,
    handlerUpdateUser,
  } = useUsers();

  //el user es el objeto que viene del formulario de usuario y lo recibe
  //el handlerAddUser que lo pasa al dispatch que lo pasa al reducer que lo agrega al estado de users

  return (
    <div className="container my-4 ">
      <h3>Formulario</h3>
      <div className="row  ">
        <div className="col-12 col-md-4 ">
          <UserForm
            userSelected={userSelected}
            handlerAddUser={handlerAddUser}
            initialUserForm={initialUserForm}
          />
        </div>
        <div className="col ">
          {users.length ? (
            <UsersList
              users={users}
              handlerRemoveUser={handlerRemoveUser}
              handlerUpdateUser={handlerUpdateUser}
            />
          ) : (
            <div className="alert alert-warning">
              No hay usuarios en el sistema!
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UsersApp;

import { useState } from "react";
import UserForm from "./components/UserForm";
import UsersList from "./components/UsersList";
import { useUsers } from "./hooks/useUsers";

const UsersApp = () => {
  const {
    users,
    userSelected,
    initialUserForm,
    handlerAddUser,
    visible,
    handlerRemoveUser,
    handlerUpdateUser,
    handlerCloseForm,
    handlerOpenForm
  } = useUsers();

  //el user es el objeto que viene del formulario de usuario y lo recibe
  //el handlerAddUser que lo pasa al dispatch que lo pasa al reducer que lo agrega al estado de users

  return (
    <>
      {visible ? (
        <div className="abrir-modal animacion fadeIn">
          <div className="modal" tabIndex="-1" style={{ display: "block" }}>
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">
                    {userSelected.id ? "Editar" : "Agregar"} Modal Usuarios
                  </h5>
                </div>
                <div className="modal-body">
                  <UserForm
                    userSelected={userSelected}
                    handlerAddUser={handlerAddUser}
                    initialUserForm={initialUserForm}
                    handlerCloseForm={handlerCloseForm}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      <div className="container my-4 ">
        <div className="row">
          <div className="col">
            <button
              className="btn btn-primary mb-3"
              onClick={handlerOpenForm}
            >
              Agregar usuario
            </button>
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
    </>
  );
};

export default UsersApp;

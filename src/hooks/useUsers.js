import { useReducer, useState } from "react";
import { usersReducer } from "../reducers/usersReducer";
import Swal from "sweetalert2";

const initialUsers = [
  {
    id: 1,
    username: "lucas",
    password: "12345",
    email: "lucas@correo.com",
  },
];

const initialUserForm = {
  id: 0,
  username: "",
  password: "",
  email: "",
};

export const useUsers = () => {
  const [users, dispatch] = useReducer(usersReducer, initialUsers);
  const [userSelected, setUserSelected] = useState(initialUserForm);
  const [visible, setVisible] = useState(false);

  const handlerAddUser = (user) => {
    //console.log(user);
    const type = user.id === 0 ? "addUser" : "updateUser";

    dispatch({
      type,
      payload: user,
    });
    Swal.fire(
      user.id === 0 ? "Usuario Creado" : "Usuario Actualizado",
      user.id === 0
        ? "El usuario ha sido creado con exito!"
        : "El usuario ha sido actualizado con exito!",
      "success"
    );
    handlerCloseForm();
  };

  const handlerRemoveUser = (id) => {
    Swal.fire({
      title: "¿Esta seguro de eliminar este usuario?",
      text: "No podra recuperar este registro!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch({
          type: "removeUser",
          payload: id,
        });

        Swal.fire("Eliminado", "Registro eliminado con exito!", "success");
      }
    });
  };

  const handlerUpdateUser = (user) => {
    setVisible(true);
    setUserSelected({ ...user });
  };

  const handlerCloseForm = () => {
    setVisible(false);
    setUserSelected(initialUserForm);
  };

  const handlerOpenForm = () => {
    setVisible(true);
  };
  return {
    users,
    userSelected,
    initialUserForm,
    handlerAddUser,
    handlerRemoveUser,
    handlerUpdateUser,
    handlerCloseForm,
    visible,
    setVisible,
    handlerOpenForm,
  };
};

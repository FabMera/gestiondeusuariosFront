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

  const handlerAddUser = (user) => {
    //console.log(user);
    const type = user.id === 0 ? "addUser" : "updateUser";

    dispatch({
      type,
      payload: user,
    });
    Swal.fire(
      "Usuario Creado",
      "El usuario a sido creado con exito",
      "success"
    );
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
    console.log(user);
    setUserSelected({ ...user });
  };
  return {
    users,
    userSelected,
    initialUserForm,
    handlerAddUser,
    handlerRemoveUser,
    handlerUpdateUser,
  };
};

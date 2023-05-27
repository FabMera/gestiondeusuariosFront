import { useReducer, useState } from "react";
import { usersReducer } from "../reducers/usersReducer";
import Swal from "sweetalert2";
import { findAll } from "../services/userService";
import { useNavigate } from "react-router-dom";

const initialUsers = [];

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
  const [mostrar,setMostrar]=useState(true);
  
  const navigate = useNavigate();
  const getUsers = async () => {
    const result = await findAll();
    console.log(result);
    dispatch({ type: "loadingUsers", payload: result.data });
  };

  const handlerAddUser = (user) => {
    //console.log(user);
    const type = user.id === 0 ? "addUser" : "updateUser";

    dispatch({
      type,
      payload: user,
    });
    Swal.fire(
      user.id === 0 ? "User Created" : "User Updated",
      user.id === 0
        ? "User created successfully!"
        : "User updated successfully!",
      "success"
    );
    handlerCloseForm();
    navigate("/users");
  };

  const handlerRemoveUser = (id) => {
    Swal.fire({
      title: "Do you want to delete this user?",
      text: "Cannot retrieve this record!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete",
      width: 350,
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch({
          type: "removeUser",
          payload: id,
        });

        Swal.fire("Removed", "Register removed successfully!", "success");
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
    handlerOpenForm,
    getUsers,
    mostrar,
    setMostrar
  };
};

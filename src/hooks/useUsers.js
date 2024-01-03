import { useContext, useReducer, useState } from "react";
import { usersReducer } from "../reducers/usersReducer";
import Swal from "sweetalert2";
import { deleteById, findAll, save, update } from "../services/userService";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../auth/context/AuthContext";
import { useDispatch, useSelector } from "react-redux";
import {
  addUser,
  removeUser,
  updateUser,
  loadingUsers,
} from "../store/slices/users/usersSlice";

const initialUsers = [];

const initialUserForm = {
  id: 0,
  username: "",
  password: "",
  email: "",
  admin: false,
};

const initialErrors = {
  username: "",
  password: "",
  email: "",
};

export const useUsers = () => {
  /* const [users, dispatch] = useReducer(usersReducer, initialUsers); */
  //Esto lo reemplazamos por el useSelector y useDispatch de react-redux
  const { users } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const [userSelected, setUserSelected] = useState(initialUserForm);
  const [visible, setVisible] = useState(false);
  const [mostrar, setMostrar] = useState(true);
  const [errors, setErrors] = useState(initialErrors);

  const navigate = useNavigate();
  const { login, handlerLogout } = useContext(AuthContext);

  const getUsers = async () => {
    try {
      const result = await findAll();
      dispatch(loadingUsers(result.data));
      /* { type: "loadingUsers", payload: result.data } */
      //Reemplazando para utilizar redux
    } catch (error) {
      if (error.response?.status == 401) {
        handlerLogout();
      }
    }
  };

  const handlerAddUser = async (user) => {
    if (!login.isAdmin) return;
    let response;
    try {
      if (user.id === 0) {
        response = await save(user);
        dispatch(addUser(response.data));
      } else {
        response = await update(user);
        dispatch(updateUser(response.data));
      }
      /*     dispatch({
                type: user.id === 0 ? "addUser" : "updateUser",
                payload: response.data,
            });
 */
      Swal.fire(
        user.id === 0 ? "User Created" : "User Updated",
        user.id === 0
          ? "User created successfully!"
          : "User updated successfully!",
        "success"
      );
      handlerCloseForm();
      navigate("/users");
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setErrors(error.response.data);
      } else if (
        error.response &&
        error.response.status === 500 &&
        error.response.data?.message?.includes("constraint")
      ) {
        if (error.response.data?.message?.includes("UK_username")) {
          setErrors({ username: "Username already registered!" });
        }
        if (error.response.data?.message?.includes("UK_email")) {
          setErrors({ email: "Email already registered" });
        }
      } else if (error.response?.status == 401) {
        handlerLogout();
      } else {
        throw error;
      }
    }
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
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await deleteById(id);
          dispatch(removeUser(id));
          /* dispatch({
                        type: "removeUser",
                        payload: id,
                    }); */

          Swal.fire("Removed", "Register removed successfully!", "success");
        } catch (error) {
          if (error.response?.status == 401) {
            handlerLogout();
          }
        }
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
    setErrors({});
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
    setMostrar,
    errors,
  };
};

import { useReducer } from "react";
import { loginReducer } from "../../reducers/loginReducer";
import Swal from "sweetalert2";
import { loginUser } from "../../services/authService";
import { useNavigate } from "react-router-dom";

const initialLogin = JSON.parse(sessionStorage.getItem("login")) || {
  isAuth: false,
  user: undefined,
};

export const useAuth = () => {
  const navigate = useNavigate();

  const [login, dispatch] = useReducer(loginReducer, initialLogin);
  const handlerLogin = ({ username, password }) => {
    const isLogin = loginUser({ username, password });

    if (!username || !password) {
      Swal.fire({
        icon: "error",
        title: "Error login",
        text: "User or password is empty",
        width: 350,
      });
    } else if (isLogin) {
      const user = { username: "admin" };
      dispatch({ type: "login", payload: user });
      Swal.fire({
        icon: "success",
        title: "Login",
        text: "Successful Login",
        width: 350,
      });
      sessionStorage.setItem("login", JSON.stringify({ isAuth: true, user }));
      navigate("/users");
    } else {
      Swal.fire({
        icon: "error",
        title: "Error login",
        text: "User or password is incorrect",
        width: 350,
      });
    }
  };

  const handlerLogout = () => {
    dispatch({ type: "logout" });
    sessionStorage.removeItem("login");
  };
  return {
    handlerLogin,
    handlerLogout,
    login,
  };
};

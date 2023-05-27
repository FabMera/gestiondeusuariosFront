import { LoginPage } from "./auth/pages/LoginPage";
import { useAuth } from "./auth/pages/useAuth";
import { Navigate, Route, Routes } from "react-router-dom";
import UserRoutes from "./routes/UserRoutes";

const UsersApp = () => {
  //Si el usuario esta autenticado, renderizo las rutas de usuarios, sino renderizo el login
  const { login, handlerLogin, handlerLogout } = useAuth();
  return (
    <Routes>
      {login.isAuth ? (
        <Route
          path="/*"
          element={<UserRoutes login={login} handlerLogout={handlerLogout} />}
        />
      ) : (
        <>
          <Route
            path="/login"
            element={<LoginPage handlerLogin={handlerLogin} />}
          />
          <Route path="/*" element={<Navigate to="/login" />} />
        </>
      )}
    </Routes>
  );
};

export default UsersApp;

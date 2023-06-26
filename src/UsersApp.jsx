import { LoginPage } from "./auth/pages/LoginPage";
import { Navigate, Route, Routes } from "react-router-dom";
import UserRoutes from "./routes/UserRoutes";
import { useContext } from "react";
import { AuthContext } from "./auth/context/AuthContext";

const UsersApp = () => {
    //Si el usuario esta autenticado, renderizo las rutas de usuarios, sino renderizo el login

    const { login } = useContext(AuthContext);
    return (
        <Routes>
            {login.isAuth ? (
                <Route path="/*" element={<UserRoutes />} />
            ) : (
                <>
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/*" element={<Navigate to="/login" />} />
                </>
            )}
        </Routes>
    );
};

export default UsersApp;

import { LoginPage } from "./auth/pages/LoginPage";
import { Navigate, Route, Routes } from "react-router-dom";
import UserRoutes from "./routes/UserRoutes";
import { useContext } from "react";
import { AuthContext } from "./auth/context/AuthContext";
import { useSelector } from "react-redux";
export const AppRoutes = () => {
    //Para acceder solo a isAuth usamos directamente el useSelector
    const { isAuth } = useSelector((state) => state.auth);
    return (
        <Routes>
            {isAuth ? (
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

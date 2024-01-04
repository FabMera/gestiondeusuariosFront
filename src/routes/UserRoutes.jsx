import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import UsersPage from "../pages/UsersPage";
import Navbar from "../components/Layout/Navbar";
import RegisterPage from "../pages/RegisterPage";
import { useAuth } from "../auth/hooks/useAuth";
/* import { UserProvider } from "../Context/UserProvider"; */

const UserRoutes = () => {
    //const {login} = useContext(UserContext);
    const { login } = useAuth();
    return (
        //Quitamos el UserProvider para utilizar redux
        <>
            {/* <UserProvider> */}
            <Navbar />
            <Routes>
                <Route path="users" element={<UsersPage />} />
                {!login.isAdmin || (
                    <>
                        <Route
                            path="users/register"
                            element={<RegisterPage />}
                        />
                        <Route
                            path="users/edit/:id"
                            element={<RegisterPage />}
                        />
                    </>
                )}

                <Route path="/" element={<Navigate to="/users" />} />
            </Routes>
            {/*  </UserProvider> */}
        </>
    );
};

export default UserRoutes;

import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import UsersPage from "../pages/UsersPage";
import Navbar from "../components/Layout/Navbar";
import RegisterPage from "../pages/RegisterPage";
import { UserProvider } from "../Context/UserProvider";

const UserRoutes = ({ login, handlerLogout }) => {
  return (
    <>
      <UserProvider>
        <Navbar login={login} handlerLogout={handlerLogout} />
        <Routes>
          <Route path="users" element={<UsersPage />} />
          <Route path="users/register" element={<RegisterPage />} />
          <Route path="users/edit/:id" element={<RegisterPage />} />
          <Route path="/" element={<Navigate to="/users" />} />
        </Routes>
      </UserProvider>
    </>
  );
};

export default UserRoutes;

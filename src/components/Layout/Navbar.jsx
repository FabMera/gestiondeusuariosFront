import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../Context/userContext";
import { AuthContext } from "../../auth/context/AuthContext";

const Navbar = () => {
    const { setMostrar } = useContext(UserContext);
    const { login, handlerLogout } = useContext(AuthContext);
    console.log(login);
    const handleMostrar = () => {
        setMostrar(false);
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <ul className="navbar-nav">
                        <li className="navbar-brand">
                            <NavLink className="nav-link" to="">
                                User App
                            </NavLink>
                        </li>
                    </ul>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/users">
                                    Users
                                </NavLink>
                            </li>
                        </ul>
                        <ul className="navbar-nav">
                            {login.isAdmin ? (
                                <li className="nav-item">
                                    <NavLink
                                        onClick={() => handleMostrar()}
                                        className="nav-link"
                                        to="/users/register"
                                    >
                                        Register User
                                    </NavLink>
                                </li>
                            ) : null}
                        </ul>
                    </div>
                    <div
                        className="collapse navbar-collapse justify-content-end"
                        id="navbarNavLogout"
                    >
                        <span className="nav-item nav-link text-primary mx-3">
                         !Hola , {login?.user?.username || login?.user?.sub}
                        </span>
                        <button
                            onClick={() => handlerLogout()}
                            className="btn btn-outline-success"
                        >
                            Logout
                        </button>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;

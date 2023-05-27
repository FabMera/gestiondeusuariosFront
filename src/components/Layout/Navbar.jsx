import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../Context/userContext";

const Navbar = ({ login, handlerLogout }) => {
  const {setMostrar,mostrar} = useContext(UserContext);
  console.log(mostrar);

  const handleMostrar = () => {
    setMostrar(false);
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            User App
          </a>
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
              <li className="nav-item">
                <button onClick={()=>handleMostrar()}  style={{ borderStyle: "none" }} className="bg-body-tertiary" >
                  <NavLink className="nav-link" to="/users/register">
                    Register User
                  </NavLink>
                </button>
                
              </li>
            </ul>
          </div>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNavLogout"
          >
            <span className="nav-item nav-link text-primary mx-3">
              {login.user?.username}
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

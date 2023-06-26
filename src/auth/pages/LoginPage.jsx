import React, { useState,useContext} from "react";
import { AuthContext } from "../context/AuthContext";
const initialLoginForm = {
  username: "",
  password: "",
};

export const LoginPage = () => {
  const [loginForm, setLoginForm] = useState({ initialLoginForm });

  const { username, password } = loginForm;
  const {handlerLogin} = useContext(AuthContext);

  const oninputChange = ({ target }) => {
    const { name, value } = target;
    setLoginForm({ ...loginForm, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    //aca va la logica de login
    handlerLogin({ username, password });
    setLoginForm(initialLoginForm);
  };

  return (
    <>
      <div className="modal" style={{ display: "block" }} tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Login Page</h5>
            </div>
            <form onSubmit={onSubmit}>
              <div className="modal-body">
                <input
                  className="form-control my-3 w-75"
                  placeholder="Username"
                  name="username"
                  value={username}
                  onChange={oninputChange}
                />
                <input
                  className="form-control my-3 w-75"
                  placeholder="Password"
                  name="password"
                  type="password"
                  value={password}
                  onChange={oninputChange}
                />
              </div>
              <div className="modal-footer">
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

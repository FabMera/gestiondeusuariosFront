import React, { useContext } from "react";
import { UserContext } from "../Context/userContext";

const FormularioUser = ({
  onSubmit,
  username,
  onInputChange,
  password,
  email,
  id,
  userForm,
  onCloseForm,
}) => {
  const { mostrar } = useContext(UserContext);
  console.log(mostrar);

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          className="form-control my-3"
          placeholder="Username"
          name="username"
          value={username}
          onChange={onInputChange}
        />
        {userForm.id ? null : (
          <input
            className="form-control my-3"
            placeholder="password"
            name="password"
            value={password}
            type="password"
            onChange={onInputChange}
          />
        )}

        <input
          className="form-control my-3"
          placeholder="email"
          name="email"
          value={email}
          type="text"
          onChange={onInputChange}
        />
        <input type="hidden" name="id" value={id} />

        <button className="btn btn-primary w-100 mb-3" type="submit">
          {userForm.id ? "Edit" : "Create"}
        </button>

        {mostrar ? (
          <button
            className="btn btn-success w-100 "
            type="button"
            onClick={() => onCloseForm()}
          >
            Close
          </button>
        ) : null}
      </form>
    </>
  );
};

export default FormularioUser;

import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const UserForm = ({
  userSelected,
  handlerAddUser,
  initialUserForm,
  setVisible,
  visible,
  handlerCloseForm,
}) => {
  const [userForm, setUserForm] = useState(initialUserForm);

  const { id, username, password, email } = userForm;

  useEffect(() => {
    setUserForm({ ...userSelected, password: "" });
  }, [userSelected]);

  const onInputChange = ({ target }) => {
    //console.log(e.target.value);
    const { name, value } = target;
    setUserForm({ ...userForm, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!username || (!password && id === 0) || !email) {
      Swal.fire(
        "Error",
        "Debe completar todos los campos del formulario",
        "error"
      );
      return;
    }
    handlerAddUser(userForm);
    setUserForm(initialUserForm);
  };

  const onCloseForm = () => {
    handlerCloseForm();
    setUserForm(initialUserForm);
  };

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
          type="email"
          onChange={onInputChange}
        />
        <input type="hidden" name="id" value={id} />

        <button className="btn btn-primary w-100 mb-3" type="submit">
          {userForm.id ? "Editar" : "Crear"}
        </button>
        <button
          className="btn btn-primary mx-2"
          type="button"
          onClick={() => onCloseForm()}
        >
          Cerrar
        </button>
      </form>
    </>
  );
};
export default UserForm;

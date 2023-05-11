import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const UserForm = ({ userSelected, handlerAddUser, initialUserForm }) => {
  const [userForm, setUserForm] = useState(initialUserForm);

  const { id, username, password, email } = userForm;

  useEffect(() => {
    setUserForm(userSelected);
  }, [userSelected]);

  const onInputChange = ({ target }) => {
    //console.log(e.target.value);
    const { name, value } = target;
    setUserForm({ ...userForm, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (Object.values(userForm).includes("")) {
      Swal.fire(
        "Error",
        "Debe completar todos los campos del formulario",
        "error"
      );
      return;
    }
    if (userForm.id) {
      Swal.fire(
        "Actualizado",
        "El usuario fue actualizado correctamente",
        "success"
      );
    } else {
      handlerAddUser(userForm);
      Swal.fire("Agregado", "El usuario fue agregado correctamente", "success");
    }

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
          {userForm.id ? "Actualizar" : "Agregar"}
        </button>
      </form>
    </>
  );
};
export default UserForm;

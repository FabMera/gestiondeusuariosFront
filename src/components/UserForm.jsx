import React, { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import FormularioUser from "./FormularioUser";
import { UserContext } from "../Context/userContext";

const UserForm = ({ userSelected, handlerCloseForm }) => {
    const { initialUserForm, handlerAddUser, errors } = useContext(UserContext);
    const [userForm, setUserForm] = useState(initialUserForm);
    const [checked, setChecked] = useState(userForm.admin);

    const { id, username, password, email, admin } = userForm;

    useEffect(() => {
        setUserForm({ ...userSelected, password: "" });
    }, [userSelected]);

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setUserForm({ ...userForm, [name]: value });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        /*  if (!username || (!password && id === 0) || !email) {
      Swal.fire("Error", " Username, password and email are required", "error");
      return;
    } else if (!email.includes("@") || !email.includes(".")) {
      Swal.fire("Error", "Email format is not valid", "error");
      return;
    } */
        handlerAddUser(userForm);
    };

    const onCloseForm = () => {
        handlerCloseForm();
        setUserForm(initialUserForm);
    };

    const onCheckBoxChange = () => {
        setChecked(!checked);
        setUserForm({ ...userForm, admin: checked });
    };

    return (
        <>
            <FormularioUser
                onSubmit={onSubmit}
                username={username}
                onInputChange={onInputChange}
                password={password}
                email={email}
                id={id}
                userForm={userForm}
                onCloseForm={onCloseForm}
                errors={errors}
                admin={admin}
                onCheckBoxChange={onCheckBoxChange}
            />
        </>
    );
};
export default UserForm;

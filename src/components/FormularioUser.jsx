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
    admin,
    onCheckBoxChange
}) => {
    const { mostrar, errors } = useContext(UserContext);
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
                <p className="text-danger">{errors?.username}</p>
                {userForm.id ? null : (
                    <>
                        <input
                            className="form-control my-3"
                            placeholder="password"
                            name="password"
                            value={password}
                            type="password"
                            onChange={onInputChange}
                        />
                        <p className="text-danger">{errors?.password}</p>
                    </>
                )}

                <input
                    className="form-control my-3"
                    placeholder="email"
                    name="email"
                    value={email}
                    type="text"
                    onChange={onInputChange}
                />
                <p className="text-danger">{errors?.email}</p>
                <div className="mb-3 form -check">
                    <input type="checkbox" name="admin" checked={admin} className="form-check-input me-2" onChange={onCheckBoxChange} />
                    <label className="form-check-label">Admin</label>
                </div>

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

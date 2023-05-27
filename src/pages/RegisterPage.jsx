import React, { useContext, useEffect, useState } from "react";
import UserForm from "../components/UserForm";
import { useParams } from "react-router-dom";
import { UserContext } from "../Context/userContext";

const RegisterPage = () => {
  const { users = [], initialUserForm } = useContext(UserContext);
  const [userSelected, setUserSelected] = useState(initialUserForm);

  const { id } = useParams();

  useEffect(() => {
    const user = users.find((user) => user.id == id) || initialUserForm;
    setUserSelected(user);
    console.log(id);
  }, [id]);
  return (
    <>
      <div className="container my-4 text-center">
        <h4>{userSelected.id ? "Edit" : "Register"}Users</h4>
        <div className="row">
          <div className="col col-md-6 mx-auto">
            <UserForm userSelected={userSelected} />
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;

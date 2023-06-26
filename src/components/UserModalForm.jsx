import React, { useContext } from "react";
import UserForm from "./UserForm";
import { UserContext } from "../Context/userContext";

const UserModalForm = () => {
    const { userSelected, handlerCloseForm } = useContext(UserContext);
    return (
        <>
            <div className="abrir-modal animacion fadeIn">
                <div
                    className="modal"
                    tabIndex="-1"
                    style={{ display: "block" }}
                >
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">
                                    {userSelected.id ? "Edit" : "Create"} User
                                </h5>
                            </div>
                            <div className="modal-body">
                                <UserForm
                                    userSelected={userSelected}
                                    handlerCloseForm={handlerCloseForm}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserModalForm;

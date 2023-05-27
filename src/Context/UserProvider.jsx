import { useUsers } from "../hooks/useUsers";
import { UserContext } from "./userContext"

export const UserProvider = ({ children }) => {

    const {
        users,
        userSelected,
        initialUserForm,
        handlerAddUser,
        visible,
        handlerRemoveUser,
        handlerUpdateUser,
        handlerCloseForm,
        handlerOpenForm,
        setMostrar,
        mostrar
      } = useUsers();
    
    return (
        <UserContext.Provider value={
            {
                users,
                userSelected,
                initialUserForm,
                handlerAddUser,
                visible,
                handlerRemoveUser,
                handlerUpdateUser,
                handlerCloseForm,
                handlerOpenForm,
                setMostrar,
                mostrar
            }}>
            {children}
        </UserContext.Provider>
    )
}
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
        mostrar,
        getUsers,
        errors
        
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
                mostrar,
                getUsers,
                errors
                
            }}>
            {children}
        </UserContext.Provider>
    )
}
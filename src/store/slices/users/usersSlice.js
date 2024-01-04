//los slices son los que se encargan de hacer el dispatch
import { createSlice } from "@reduxjs/toolkit";

//Creamos un objeto slice con el nombre de la entidad que vamos a manejar
//Los reducers son las acciones que se van a ejecutar en el store.


export const initialUserForm = {
    id: 0,
    username: "",
    password: "",
    email: "",
    admin: false,
};
export const initialErrors = {
    username: "",
    password: "",
    email: "",
};
export const usersSlice = createSlice({
    name: 'users',
    initialState: {
        users: [],
        userSelected: initialUserForm,
        visible: false,
        errors: initialErrors,

    },
    reducers: {
        //el payload es la informacion que se va a enviar al store
        addUser: (state, action) => {
            state.users = [...state.users, { ...action.payload }]
            state.userSelected = initialUserForm;
            state.visible = false;
        },
        removeUser: (state, action) => {
            state.users = state.users.filter(user => user.id !== action.payload)
        },
        updateUser: (state, action) => {
            state.users = state.users.map(user => {
                if (user.id === action.payload.id) {
                    return {
                        ...action.payload,
                    }
                }
                return user;
            })
        },
        loadingUsers: (state, action) => {
            state.users = action.payload;
        },
        onUserSelectedForm: (state, action) => {
            state.userSelected = action.payload;
            state.visible = true;
        },
        onOpenForm: (state) => {
            state.visible = true;
        },
        onCloseForm: (state) => {
            state.visible = false;
            state.userSelected = initialUserForm;
        },
        loadingError: (state, action) => {
            state.errors = action.payload;
        }

    }
})

//Exportamos las acciones
export const { addUser, removeUser, updateUser, loadingUsers, onUserSelectedForm, onOpenForm, onCloseForm, loadingError } = usersSlice.actions;
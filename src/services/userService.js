import axios from "axios";

const BASE_URL = "http://localhost:8080/users";

//configuracion de los headers para las peticiones
const config = () => {
    //obtenemos el token del sessionStorage y lo pasamos en el header de la peticion para que el backend pueda validar el token.
    return {
        headers: {
            Authorization: sessionStorage.getItem("token"),
            "Content-Type": "application/json",
        },
    };
};

//funcion para obtener todos los usuarios
export const findAll = async () => {
    try {
        const response = await axios.get(BASE_URL);
        return response;
    } catch (error) {
        console.error(error);
    }
    return null;
};

//funcion para guardar un usuario
export const save = async ({ username, password, email, admin }) => {
    try {
        return await axios.post(
            BASE_URL,
            {
                username,
                password,
                email,
                admin,
            },
            config()
        );
    } catch (error) {
        throw error;
    }
};

//funcion para actualizar un usuario
export const update = async ({ id, username, email, admin }) => {
    try {
        return await axios.put(
            `${BASE_URL}/${id}`,
            {
                username,
                email,
                admin
            },
            config()
        );
    } catch (error) {
        throw error;
    }
};
//funcion para eliminar un usuario por id
export const deleteById = async (id) => {
    try {
        await axios.delete(`${BASE_URL}/${id}`, config());
    } catch (error) {
        throw error;
    }
};

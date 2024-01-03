import userApi from "../apis/userApis";

//configuracion de los headers para las peticiones lo reemplazamos por el interceptor userApi.js
/* const config = () => {
    //obtenemos el token del sessionStorage y lo pasamos en el header de la peticion para que el backend pueda validar el token.
    return {
        headers: {
            Authorization: sessionStorage.getItem("token"),
            "Content-Type": "application/json",
        },
    };
}; */
const BASE_URL = "";

//funcion para obtener todos los usuarios
export const findAll = async () => {
    try {
        const response = await userApi.get(BASE_URL);
        return response;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

//funcion para guardar un usuario
export const save = async ({ username, password, email, admin }) => {
    try {
        return await userApi.post(BASE_URL, {
            username,
            password,
            email,
            admin,
        });
    } catch (error) {
        throw error;
    }
};

//funcion para actualizar un usuario
export const update = async ({ id, username, email, admin }) => {
    try {
        return await userApi.put(`${BASE_URL}/${id}`, {
            username,
            email,
            admin,
        });
    } catch (error) {
        throw error;
    }
};
//funcion para eliminar un usuario por id
export const deleteById = async (id) => {
    try {
        await userApi.delete(`${BASE_URL}/${id}`);
    } catch (error) {
        throw error;
    }
};

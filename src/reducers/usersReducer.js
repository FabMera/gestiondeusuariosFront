export const generarId = () => {
  const random = Math.random().toString(36).substring(2);
  const fecha = Date.now().toString(36);
  return random + fecha;
};

export const usersReducer = (state = [], action) => {
  switch (action.type) {
    case "addUser":
      return [...state, { ...action.payload, id: generarId() }];
    case "removeUser":
      return state.filter((user) => user.id !== action.payload);
    case "updateUser":
      return state.map((u) => {
        //comprueba si el id del usuario es igual
        //al id del usuario que se quiere actualizar y
        //si es asi, devuelve el usuario actualizado y si no lo es, devuelve el usuario sin actualizar .
        if (u.id === action.payload.id) {
          return { ...action.payload, password: u.password };
        } else {
          return u;
        }
      });
    case "loadingUsers":
      return action.payload;
    default:
      return state;
  }
};

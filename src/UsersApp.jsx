import { Provider } from "react-redux";
import { AppRoutes } from "./AppRoutes";

const UsersApp = () => {
    return (
        <Provider store={store}>
            <AppRoutes />;
        </Provider>
    );
};

export default UsersApp;

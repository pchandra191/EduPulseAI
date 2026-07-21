import { Provider } from "react-redux";
import { store } from "../../store";

function AppReduxProvider({ children }) {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
}

export default AppReduxProvider;
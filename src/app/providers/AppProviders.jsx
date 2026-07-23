import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { store } from "@/store";
import AuthInitializer from "@/features/auth/components/AuthInitializer";

const queryClient = new QueryClient();

const AppProviders = ({ children }) => {
    return (
        <Provider store={store}>
            <QueryClientProvider client={queryClient}>
                <AuthInitializer>
                    {children}
                </AuthInitializer>
            </QueryClientProvider>
        </Provider>
    );
};

export default AppProviders;
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "../config/queryClient";

function AppQueryProvider({ children }) {
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    );
}

export default AppQueryProvider;
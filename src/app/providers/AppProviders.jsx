import AppThemeProvider from "./AppThemeProvider";
import AppReduxProvider from "./AppReduxProvider";
import AppQueryProvider from "./AppQueryProvider";

function AppProviders({ children }) {
    return (
        <AppReduxProvider>
            <AppQueryProvider>
                <AppThemeProvider>
                    {children}
                </AppThemeProvider>
            </AppQueryProvider>
        </AppReduxProvider>
    );
}

export default AppProviders;
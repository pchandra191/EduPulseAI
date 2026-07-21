import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./auth/authSlice";
import uiReducer from "./ui/uiSlice";
import themeReducer from "./theme/themeSlice";
import instituteReducer from "./institute/instituteSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        ui: uiReducer,
        theme: themeReducer,
        institute: instituteReducer,
    },
    devTools: import.meta.env.DEV,
});
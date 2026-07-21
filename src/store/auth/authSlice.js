import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAuthenticated: false,
    token: null,
    refreshToken: null,
    user: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        loginSuccess(state, action) {
            state.isAuthenticated = true;
            state.token = action.payload.token;
            state.refreshToken = action.payload.refreshToken;
            state.user = action.payload.user;
        },

        logout(state) {
            Object.assign(state, initialState);
        },
    },
});

export const { loginSuccess, logout } = authSlice.actions;

export default authSlice.reducer;
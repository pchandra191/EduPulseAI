const initialState = {
    isAuthenticated: false,
    isInitialized: false,

    accessToken: null,
    refreshToken: null,
    user: null,
};

loginSuccess(state, action) {
    state.isAuthenticated = true;
    state.isInitialized = true;

    state.accessToken = action.payload.accessToken;
    state.refreshToken = action.payload.refreshToken;
    state.user = action.payload.user;
}

logout(state) {
    state.isAuthenticated = false;
    state.accessToken = null;
    state.refreshToken = null;
    state.user = null;
    state.isInitialized = true;
}
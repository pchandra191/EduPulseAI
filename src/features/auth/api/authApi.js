import axios from "@/app/config/axios";
import { API } from "@/app/constants";

export const authApi = {
    login(credentials) {
        return axios.post(API.AUTH.LOGIN, credentials);
    },

    me() {
        return axios.get(API.AUTH.ME);
    },

    logout() {
        return axios.post(API.AUTH.LOGOUT);
    },

    forgotPassword(email) {
        return axios.post(API.AUTH.FORGOT_PASSWORD, {
            email,
        });
    },

    resetPassword(payload) {
        return axios.post(API.AUTH.RESET_PASSWORD, payload);
    },
};
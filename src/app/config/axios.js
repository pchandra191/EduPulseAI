import axios from "axios";
import { tokenStorage } from "@/features/auth/services/tokenStorage";

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    timeout: 30000,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
});

/**
 * Attach JWT Access Token to every request.
 */
axiosInstance.interceptors.request.use(
    (config) => {
        const accessToken = tokenStorage.getAccessToken();

        if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`;
        }

        return config;
    },
    (error) => Promise.reject(error)
);

/**
 * Automatically refresh expired access tokens.
 */
axiosInstance.interceptors.response.use(
    (response) => response,

    async (error) => {
        const originalRequest = error.config;

        if (
            error.response?.status === 401 &&
            !originalRequest._retry
        ) {
            originalRequest._retry = true;

            try {
                const refreshToken = tokenStorage.getRefreshToken();

                if (!refreshToken) {
                    throw new Error("Refresh token not found.");
                }

                /**
                 * IMPORTANT:
                 * Use plain axios here.
                 * Do NOT use axiosInstance otherwise
                 * interceptors will call themselves recursively.
                 */
                const response = await axios.post(
                    `${import.meta.env.VITE_API_BASE_URL}/auth/refresh`,
                    {
                        refresh_token: refreshToken,
                    }
                );

                const {
                    accessToken,
                    refresh_token,
                } = response.data.data;

                tokenStorage.setAccessToken(accessToken);
                tokenStorage.setRefreshToken(refresh_token);

                originalRequest.headers.Authorization = `Bearer ${accessToken}`;

                return axiosInstance(originalRequest);

            } catch (refreshError) {

                tokenStorage.clear();

                window.location.href = "/login";

                return Promise.reject(refreshError);
            }
        }

        return Promise.reject(error);
    }
);

export default axiosInstance;
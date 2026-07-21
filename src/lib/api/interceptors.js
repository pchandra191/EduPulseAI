import apiClient from "./client";

apiClient.interceptors.request.use(
    (config) => {
        // Token will be added here later
        return config;
    },
    (error) => Promise.reject(error)
);

apiClient.interceptors.response.use(
    (response) => response,
    (error) => {
        // Handle 401, 403, 500 later
        return Promise.reject(error);
    }
);

export default apiClient;
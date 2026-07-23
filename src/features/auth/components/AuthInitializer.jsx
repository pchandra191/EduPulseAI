import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { authApi } from "@/features/auth/api/authApi";
import { tokenStorage } from "@/features/auth/services/tokenStorage";
import { loginSuccess, logout } from "@/store/auth/authSlice";
import FullScreenLoader from "@/components/common/FullScreenLoader";

const AuthInitializer = ({ children }) => {
    const dispatch = useDispatch();

    const [initializing, setInitializing] = useState(true);

    useEffect(() => {
        const initialize = async () => {
            try {
                console.log("Initializing authentication");
                const accessToken = tokenStorage.getAccessToken();
                const refreshToken = tokenStorage.getRefreshToken();

                if (!accessToken || !refreshToken) {
                    tokenStorage.clear();
                    setInitializing(false);
                    return;
                }

                const response = await authApi.me();
console.log("ME RESPONSE", response.data);
                dispatch(
                    loginSuccess({
                        accessToken,
                        refreshToken: tokenStorage.getRefreshToken(),
                        user: response.data.data,
                    })
                );
            } catch (error) {
                 console.log("ME FAILED", error.response);
                tokenStorage.clear();
                dispatch(logout());
            } finally {
                setInitializing(false);
            }
        };

        initialize();
    }, [dispatch]);

        if (initializing) {
            return <FullScreenLoader />;
        }

    return children;
};

export default AuthInitializer;
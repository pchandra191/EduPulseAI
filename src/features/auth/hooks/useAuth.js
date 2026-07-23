import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { ROUTES } from "@/app/constants";
import { authApi } from "@/features/auth/api/authApi";
import { tokenStorage } from "@/features/auth/services/tokenStorage";
import { logout } from "@/store/auth/authSlice";

export const useAuth = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const signOut = async () => {
        try {
            await authApi.logout();
        } catch (error) {
            // Ignore server errors during logout.
            // We still want to clear the local session.
        } finally {
            tokenStorage.clear();

            dispatch(logout());

            navigate(ROUTES.LOGIN, {
                replace: true,
            });
        }
    };

    return {
        signOut,
    };
};
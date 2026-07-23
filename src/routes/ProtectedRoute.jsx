import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

import { ROUTES } from "@/app/constants";

function ProtectedRoute() {
    const isAuthenticated = useSelector(
        (state) => state.auth.isAuthenticated
    );

    return isAuthenticated
        ? <Outlet />
        : <Navigate to={ROUTES.LOGIN} replace />;
}

export default ProtectedRoute;
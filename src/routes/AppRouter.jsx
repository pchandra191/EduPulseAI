import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import LoginPage from "@/features/auth/pages/LoginPage";
import DashboardPage from "@/features/dashboard/pages/DashboardPage";

import DashboardLayout from "@/shared/layouts/DashboardLayout";
import ProtectedRoute from "@/routes/ProtectedRoute";

import PermissionGuard from "@/features/auth/components/PermissionGuard";
import { ROUTES } from "@/app/constants";
import { SETTINGS_PERMISSIONS } from "@/features/auth/permissions";
import AccessControlPage from "@/features/access-control/pages/AccessControlPage";

function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>

                <Route
                    path="/"
                    element={<Navigate to="/login" replace />}
                />

                <Route path="/login" element={<LoginPage />} />

                <Route element={<ProtectedRoute />}>
                    <Route element={<DashboardLayout />}>
                        <Route
                            path="/dashboard"
                            element={<DashboardPage />}
                        />

                        <Route
                            path={ROUTES.ACCESS_CONTROL}
                            element={
                                <PermissionGuard
                                    permission={SETTINGS_PERMISSIONS.EDIT}
                                >
                                    <AccessControlPage />
                                </PermissionGuard>
                            }
                        />
                    </Route>
                </Route>

            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;
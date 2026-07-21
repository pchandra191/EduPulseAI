import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import PublicRoute from "./PublicRoute";
import ProtectedRoute from "./ProtectedRoute";
import { ROUTES } from "./routeConstants";

const LoginPage = lazy(() => import("@/features/auth/pages/LoginPage"));
const DashboardPage = lazy(() => import("@/features/dashboard/pages/DashboardPage"));
const UnauthorizedPage = lazy(() => import("@/features/auth/pages/UnauthorizedPage"));
const NotFoundPage = lazy(() => import("@/features/common/pages/NotFoundPage"));
const LoadingPage = lazy(() => import("@/features/common/pages/LoadingPage"));

function AppRouter() {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingPage />}>
        <Routes>
          <Route
            path={ROUTES.LOGIN}
            element={
              <PublicRoute>
                <LoginPage />
              </PublicRoute>
            }
          />

          <Route
            path={ROUTES.DASHBOARD}
            element={
              <ProtectedRoute>
                <DashboardPage />
              </ProtectedRoute>
            }
          />

          <Route
            path={ROUTES.UNAUTHORIZED}
            element={<UnauthorizedPage />}
          />

          <Route
            path="*"
            element={<NotFoundPage />}
          />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default AppRouter;
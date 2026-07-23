import { usePermission } from "../hooks/usePermission";

function PermissionGuard({
    permission,
    children,
    fallback = null,
}) {
    const { can } = usePermission();

    if (!can(permission)) {
        return fallback;
    }

    return children;
}

export default PermissionGuard;
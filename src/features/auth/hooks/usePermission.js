import { useMemo } from "react";
import { useSelector } from "react-redux";

import { ROLE_PERMISSIONS } from "../permissions/rolePermissions";

export const usePermission = () => {
  console.log("ROLE_PERMISSIONS:", ROLE_PERMISSIONS);
console.log(
    "SUPER_ADMIN permissions:",
    ROLE_PERMISSIONS["ROLE_SUPER_ADMIN"]
);
  const user = useSelector((state) => state.auth.user);
  console.log("User:", user);

  const permissions = useMemo(() => {
    console.log("Roles:", user?.roles);

    if (!user?.roles?.length) {
      return [];
    }

    return user.roles.flatMap((role) => ROLE_PERMISSIONS[role] || []);
  }, [user]);

  const can = (permission) => {
    if (permissions.includes("*")) {
      return true;
    }

    return permissions.includes(permission);
  };

  return {
    permissions,
    can,
  };
};

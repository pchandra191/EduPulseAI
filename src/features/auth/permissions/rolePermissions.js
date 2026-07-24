import { ROLES } from "@/app/constants";

import { USER_PERMISSIONS } from "@/features/auth/permissions";

export const ROLE_PERMISSIONS = {
    [ROLES.SUPER_ADMIN]: ["*"],

    [ROLES.INSTITUTE]: [
        USER_PERMISSIONS.VIEW,
        USER_PERMISSIONS.CREATE,
        USER_PERMISSIONS.EDIT,
        USER_PERMISSIONS.STATUS,
        USER_PERMISSIONS.RESET_PASSWORD,
        USER_PERMISSIONS.MANAGE_PERMISSIONS,
    ],

    [ROLES.TEACHER]: [],

    [ROLES.STUDENT]: [],
};
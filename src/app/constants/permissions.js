import { ROLES } from "@/app/constants";
import { PERMISSIONS } from "./permissions";

export const ROLE_PERMISSIONS = {
    [ROLES.SUPER_ADMIN]: ["*"],

    [ROLES.INSTITUTE]: [
        // Institute permissions
    ],

    [ROLES.TEACHER]: [
        // Teacher permissions
    ],

    [ROLES.STUDENT]: [
        // Student permissions
    ],
};
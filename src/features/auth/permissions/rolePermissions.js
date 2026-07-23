import { ROLES } from "@/app/constants";
import { PERMISSIONS } from "./permissions";


// Why are we separating this?
// Notice we have two files now:
// permissions.js
// contains all available permissions.
// rolePermissions.js
// contains which role gets which permissions.
export const ROLE_PERMISSIONS = {
    
    [ROLES.SUPER_ADMIN]: ["*"],

    [ROLES.INSTITUTE]: [
        // Dashboard
        PERMISSIONS.DASHBOARD_VIEW,

        // Students
        PERMISSIONS.STUDENT_VIEW,
        PERMISSIONS.STUDENT_CREATE,
        PERMISSIONS.STUDENT_EDIT,
        PERMISSIONS.STUDENT_DELETE,

        // Teachers
        PERMISSIONS.TEACHER_VIEW,
        PERMISSIONS.TEACHER_CREATE,
        PERMISSIONS.TEACHER_EDIT,
        PERMISSIONS.TEACHER_DELETE,

        // Homework
        PERMISSIONS.HOMEWORK_VIEW,
        PERMISSIONS.HOMEWORK_CREATE,
        PERMISSIONS.HOMEWORK_EDIT,
        PERMISSIONS.HOMEWORK_DELETE,

        // Notices
        PERMISSIONS.NOTICE_VIEW,
        PERMISSIONS.NOTICE_CREATE,
        PERMISSIONS.NOTICE_EDIT,
        PERMISSIONS.NOTICE_DELETE,

        // Settings
        PERMISSIONS.SETTINGS_VIEW,
        PERMISSIONS.SETTINGS_EDIT,
    ],

    [ROLES.TEACHER]: [
        // Dashboard
        PERMISSIONS.DASHBOARD_VIEW,

        // Students
        PERMISSIONS.STUDENT_VIEW,

        // Homework
        PERMISSIONS.HOMEWORK_VIEW,
        PERMISSIONS.HOMEWORK_CREATE,
        PERMISSIONS.HOMEWORK_EDIT,

        // Notices
        PERMISSIONS.NOTICE_VIEW,
        PERMISSIONS.NOTICE_CREATE,
        PERMISSIONS.NOTICE_EDIT,
    ],

    [ROLES.STUDENT]: [
        // Dashboard
        PERMISSIONS.DASHBOARD_VIEW,

        // Homework
        PERMISSIONS.HOMEWORK_VIEW,

        // Notices
        PERMISSIONS.NOTICE_VIEW,
    ],
};
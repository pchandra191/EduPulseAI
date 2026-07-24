import { DASHBOARD_PERMISSIONS } from "./dashboard.permissions";
import { STUDENT_PERMISSIONS } from "./student.permissions";
import { TEACHER_PERMISSIONS } from "./teacher.permissions";
import { HOMEWORK_PERMISSIONS } from "./homework.permissions";
import { NOTICE_PERMISSIONS } from "./notice.permissions";
import { SETTINGS_PERMISSIONS } from "./settings.permissions";

export const PERMISSION_GROUPS = [
    {
        id: "dashboard",
        title: "Dashboard",
        icon: "Dashboard",
        permissions: [
            {
                key: DASHBOARD_PERMISSIONS.VIEW,
                label: "View",
                description: "Allows viewing the dashboard",
            },
        ],
    },
    {
        id: "students",
        title: "Students",
        icon: "School",
        permissions: [
            {
                key: STUDENT_PERMISSIONS.VIEW,
                label: "View",
                description: "Allows viewing students",
            },
            {
                key: STUDENT_PERMISSIONS.CREATE,
                label: "Create",
                description: "Allows creating students",
            },
            {
                key: STUDENT_PERMISSIONS.EDIT,
                label: "Edit",
                description: "Allows editing students",
            },
            {
                key: STUDENT_PERMISSIONS.DELETE,
                label: "Delete",
                description: "Allows deleting students",
            },
        ],
    },
    {
        id: "teachers",
        title: "Teachers",
        icon: "Groups",
        permissions: [
            {
                key: TEACHER_PERMISSIONS.VIEW,
                label: "View",
                description: "Allows viewing teachers",
            },
            {
                key: TEACHER_PERMISSIONS.CREATE,
                label: "Create",
                description: "Allows creating teachers",
            },
            {
                key: TEACHER_PERMISSIONS.EDIT,
                label: "Edit",
                description: "Allows editing teachers",
            },
            {
                key: TEACHER_PERMISSIONS.DELETE,
                label: "Delete",
                description: "Allows deleting teachers",
            },
        ],
    },
    {
        id: "homework",
        title: "Homework",
        icon: "Assignment",
        permissions: [
            {
                key: HOMEWORK_PERMISSIONS.VIEW,
                label: "View",
                description: "Allows viewing homework",
            },
            {
                key: HOMEWORK_PERMISSIONS.CREATE,
                label: "Create",
                description: "Allows creating homework",
            },
            {
                key: HOMEWORK_PERMISSIONS.EDIT,
                label: "Edit",
                description: "Allows editing homework",
            },
            {
                key: HOMEWORK_PERMISSIONS.DELETE,
                label: "Delete",
                description: "Allows deleting homework",
            },
        ],
    },
    {
        id: "attendance",
        title: "Attendance",
        icon: "CalendarToday",
        permissions: [
            {
                key: "attendance.view",
                label: "View",
                description: "Allows viewing attendance",
            },
            {
                key: "attendance.mark",
                label: "Mark",
                description: "Allows marking attendance",
            },
            {
                key: "attendance.edit",
                label: "Edit",
                description: "Allows editing attendance",
            },
        ],
    },
    {
        id: "exams",
        title: "Exams",
        icon: "Quiz",
        permissions: [
            {
                key: "exam.view",
                label: "View",
                description: "Allows viewing exams",
            },
            {
                key: "exam.create",
                label: "Create",
                description: "Allows creating exams",
            },
            {
                key: "exam.edit",
                label: "Edit",
                description: "Allows editing exams",
            },
            {
                key: "exam.delete",
                label: "Delete",
                description: "Allows deleting exams",
            },
        ],
    },
    {
        id: "notices",
        title: "Notice Board",
        icon: "Campaign",
        permissions: [
            {
                key: NOTICE_PERMISSIONS.VIEW,
                label: "View",
                description: "Allows viewing notices",
            },
            {
                key: NOTICE_PERMISSIONS.CREATE,
                label: "Create",
                description: "Allows creating notices",
            },
            {
                key: NOTICE_PERMISSIONS.EDIT,
                label: "Edit",
                description: "Allows editing notices",
            },
            {
                key: NOTICE_PERMISSIONS.DELETE,
                label: "Delete",
                description: "Allows deleting notices",
            },
        ],
    },
    {
        id: "settings",
        title: "Settings",
        icon: "Settings",
        permissions: [
            {
                key: SETTINGS_PERMISSIONS.VIEW,
                label: "View",
                description: "Allows viewing settings",
            },
            {
                key: SETTINGS_PERMISSIONS.EDIT,
                label: "Edit",
                description: "Allows editing settings",
            },
        ],
    },
];

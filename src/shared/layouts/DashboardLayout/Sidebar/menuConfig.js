import DashboardIcon from "@mui/icons-material/Dashboard";
import SchoolIcon from "@mui/icons-material/School";
import GroupsIcon from "@mui/icons-material/Groups";

export const menuItems = [
    {
        id: 1,
        title: "Dashboard",
        icon: DashboardIcon,
        path: "/dashboard",
        roles: [
            "SUPER_ADMIN",
            "INSTITUTE_ADMIN",
            "TEACHER",
            "STUDENT",
        ],
    },

    {
        id: 2,
        title: "Students",
        icon: SchoolIcon,
        path: "/students",
        roles: [
            "SUPER_ADMIN",
            "INSTITUTE_ADMIN",
        ],
    },

    {
        id: 3,
        title: "Teachers",
        icon: GroupsIcon,
        path: "/teachers",
        roles: [
            "SUPER_ADMIN",
            "INSTITUTE_ADMIN",
        ],
    },
    {
        id: "fees",
        title: "Fee Management",
        icon: GroupsIcon,
        path: "/fees",
        roles: ["SUPER_ADMIN", "ACCOUNTANT"]
    },
];
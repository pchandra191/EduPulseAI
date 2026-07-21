import SchoolIcon from "@mui/icons-material/School";
import PersonIcon from "@mui/icons-material/Person";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import FactCheckIcon from "@mui/icons-material/FactCheck";

export const dashboardStats = [
    {
        id: 1,
        title: "Students",
        value: "1,245",
        icon: SchoolIcon,
        color: "primary",
    },
    {
        id: 2,
        title: "Teachers",
        value: "86",
        icon: PersonIcon,
        color: "success",
    },
    {
        id: 3,
        title: "Revenue",
        value: "₹12.8L",
        icon: CurrencyRupeeIcon,
        color: "warning",
    },
    {
        id: 4,
        title: "Attendance",
        value: "96%",
        icon: FactCheckIcon,
        color: "info",
    },
];

export const recentActivities = [
    "Student Rahul Kumar admitted",
    "Homework assigned for Class 10",
    "Fee payment received",
    "Teacher Anita Singh added",
];

export const upcomingTasks = [
    "Mathematics Test - Tomorrow",
    "Fee Reminder - Class 9",
    "Science Practical - Friday",
    "Parent Meeting - Saturday",
];
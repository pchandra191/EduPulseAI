import {
    dashboardStats,
    recentActivities,
    upcomingTasks,
} from "../data/dashboardData";

function useDashboard() {
    return {
        stats: dashboardStats,
        activities: recentActivities,
        tasks: upcomingTasks,
    };
}

export default useDashboard;
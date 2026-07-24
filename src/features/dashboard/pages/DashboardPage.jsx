import Grid from "@mui/material/Grid";

import { usePermission } from "@/features/auth/hooks/usePermission";
import {
    STUDENT_PERMISSIONS,
} from "@/features/auth/permissions";

import {
    DashboardStats,
    QuickActions,
    RecentActivities,
    UpcomingTasks,
} from "../components";

function DashboardPage() {
    const { can, permissions } = usePermission();

    console.log("Permissions:", permissions);
    console.log(
        "Can create student:",
        can(STUDENT_PERMISSIONS.CREATE)
    );

    return (
        <>
            <DashboardStats />

            <Grid container spacing={3}>
                <Grid
                    size={{
                        xs: 12,
                        md: 4,
                    }}
                >
                    <QuickActions />
                </Grid>

                <Grid
                    size={{
                        xs: 12,
                        md: 8,
                    }}
                >
                    <RecentActivities />
                </Grid>

                <Grid size={12}>
                    <UpcomingTasks />
                </Grid>
            </Grid>
        </>
    );
}

export default DashboardPage;
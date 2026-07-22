import Grid from "@mui/material/Grid";

import {
    DashboardStats,
    QuickActions,
    RecentActivities,
    UpcomingTasks,
} from "../components";

function DashboardPage() {
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
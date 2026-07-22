import Grid from "@mui/material/Grid";

import StatCard from "./StatCard";
import { dashboardStats } from "../data/dashboardData";

function DashboardStats() {
    return (
        <Grid
            container
            spacing={3}
            mb={3}
        >
            {dashboardStats.map((item) => (
                <Grid
                    key={item.id}
                    size={{
                        xs: 12,
                        sm: 6,
                        md: 3,
                    }}
                >
                    <StatCard {...item} />
                </Grid>
            ))}
        </Grid>
    );
}

export default DashboardStats;
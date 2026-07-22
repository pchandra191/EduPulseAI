import {
    Card,
    CardContent,
    Typography,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
} from "@mui/material";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import { recentActivities } from "../data/dashboardData";

function RecentActivities() {
    return (
        <Card sx={{ height: "100%" }}>
            <CardContent>
                <Typography
                    variant="h6"
                    fontWeight={600}
                    mb={2}
                >
                    Recent Activities
                </Typography>

                <List>
                    {recentActivities.map((activity, index) => (
                        <ListItem key={index} disablePadding sx={{ mb: 1 }}>
                            <ListItemIcon>
                                <CheckCircleIcon color="success" />
                            </ListItemIcon>

                            <ListItemText primary={activity} />
                        </ListItem>
                    ))}
                </List>
            </CardContent>
        </Card>
    );
}

export default RecentActivities;
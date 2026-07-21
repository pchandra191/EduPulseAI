import {
    Card,
    CardContent,
    Typography,
    List,
    ListItem,
    ListItemText,
    Divider,
} from "@mui/material";

import { upcomingTasks } from "../data/dashboardData";

function UpcomingTasks() {
    return (
        <Card>
            <CardContent>
                <Typography
                    variant="h6"
                    fontWeight={600}
                    mb={2}
                >
                    Upcoming Tasks
                </Typography>

                <List>
                    {upcomingTasks.map((task, index) => (
                        <div key={index}>
                            <ListItem disablePadding sx={{ py: 1 }}>
                                <ListItemText primary={task} />
                            </ListItem>

                            {index !== upcomingTasks.length - 1 && (
                                <Divider />
                            )}
                        </div>
                    ))}
                </List>
            </CardContent>
        </Card>
    );
}

export default UpcomingTasks;
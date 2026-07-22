import {
    Card,
    CardContent,
    Typography,
    Stack,
    Button,
} from "@mui/material";

import { useNavigate } from "react-router-dom";

function QuickActions() {
    const navigate = useNavigate();

    return (
        <Card sx={{ height: "100%" }}>
            <CardContent>
                <Typography
                    variant="h6"
                    fontWeight={600}
                    mb={2}
                >
                    Quick Actions
                </Typography>

                <Stack spacing={2}>
                    <Button
                        variant="contained"
                        fullWidth
                        onClick={() => navigate("/students")}
                    >
                        Add Student
                    </Button>

                    <Button
                        variant="contained"
                        fullWidth
                        color="success"
                        onClick={() => navigate("/teachers")}
                    >
                        Add Teacher
                    </Button>

                    <Button
                        variant="outlined"
                        fullWidth
                    >
                        Take Attendance
                    </Button>

                    <Button
                        variant="outlined"
                        fullWidth
                    >
                        Create Notice
                    </Button>
                </Stack>
            </CardContent>
        </Card>
    );
}

export default QuickActions;
import {
    Card,
    CardContent,
    Typography,
    Stack,
    Button,
} from "@mui/material";

import { useNavigate } from "react-router-dom";
import PermissionGuard from "@/features/auth/components/PermissionGuard";
import {
    STUDENT_PERMISSIONS,
    TEACHER_PERMISSIONS,
    NOTICE_PERMISSIONS
} from "@/features/auth/permissions";

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
                    <PermissionGuard permission={STUDENT_PERMISSIONS.CREATE}>
                        <Button fullWidth>Add Student</Button>
                    </PermissionGuard>

                    <PermissionGuard permission={TEACHER_PERMISSIONS.CREATE}>
                        <Button fullWidth>Add Teacher</Button>
                    </PermissionGuard>

                    <PermissionGuard permission={NOTICE_PERMISSIONS.CREATE}>
                        <Button fullWidth>Create Notice</Button>
                    </PermissionGuard>
                </Stack>
            </CardContent>
        </Card>
    );
}

export default QuickActions;
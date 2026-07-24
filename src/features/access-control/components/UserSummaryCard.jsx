import {
    Card,
    CardContent,
    Typography,
    Stack,
    Chip,
    Box,
} from "@mui/material";

function UserSummaryCard({ user }) {
    return (
        <Card variant="outlined">
            <CardContent>
                <Stack direction="row" justifyContent="space-between" alignItems="flex-start" spacing={2}>
                    <Box>
                        <Typography variant="h6" fontWeight={600} gutterBottom>
                            {user.name}
                        </Typography>
                        <Stack spacing={0.5}>
                            <Typography variant="body2" color="text.secondary">
                                Role: <strong>{user.role}</strong>
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Department: <strong>{user.department}</strong>
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Status: <strong>{user.status}</strong>
                            </Typography>
                        </Stack>
                    </Box>
                    <Stack direction="row" spacing={1}>
                        <Chip label={user.role} size="small" variant="outlined" />
                        <Chip
                            label={user.status}
                            size="small"
                            color={user.status === "Active" ? "success" : "default"}
                            variant="outlined"
                        />
                    </Stack>
                </Stack>
            </CardContent>
        </Card>
    );
}

export default UserSummaryCard;

import {
    Card,
    CardContent,
    Typography,
    Box,
    Avatar,
} from "@mui/material";

function StatCard({
    title,
    value,
    icon: Icon,
    color = "primary",
}) {
    return (
        <Card elevation={2}>
            <CardContent>
                <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}
                >
                    <Box>
                        <Typography
                            variant="body2"
                            color="text.secondary"
                        >
                            {title}
                        </Typography>

                        <Typography
                            variant="h4"
                            fontWeight={700}
                            mt={1}
                        >
                            {value}
                        </Typography>
                    </Box>

                    <Avatar
                        sx={{
                            bgcolor: `${color}.main`,
                            width: 56,
                            height: 56,
                        }}
                    >
                        <Icon />
                    </Avatar>
                </Box>
            </CardContent>
        </Card>
    );
}

export default StatCard;
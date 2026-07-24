import {
    Typography,
    Stack,
} from "@mui/material";

function PageHeader({ title, subtitle }) {
    return (
        <Stack spacing={0.5}>
            <Typography variant="h4" fontWeight={600}>
                {title}
            </Typography>
            <Typography variant="body1" color="text.secondary">
                {subtitle}
            </Typography>
        </Stack>
    );
}

export default PageHeader;

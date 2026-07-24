import { useMemo } from "react";
import {
    FormControlLabel,
    Checkbox,
    Typography,
    Tooltip,
    Box,
} from "@mui/material";

function PermissionItem({ permission, checked, onToggle }) {
    const description = useMemo(() => {
        if (!permission.description) return null;
        return permission.description.charAt(0).toUpperCase() + permission.description.slice(1);
    }, [permission.description]);

    return (
        <Tooltip title={description || permission.label} arrow disableInteractive>
            <Box sx={{ display: "flex", alignItems: "center" }}>
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={checked}
                            onChange={() => onToggle(permission.key)}
                            size="small"
                            aria-label={`${permission.label} permission`}
                        />
                    }
                    label={
                        <Typography variant="body2" fontWeight={500}>
                            {permission.label}
                        </Typography>
                    }
                />
            </Box>
        </Tooltip>
    );
}

export default PermissionItem;

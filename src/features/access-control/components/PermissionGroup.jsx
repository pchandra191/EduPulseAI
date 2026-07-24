import {
    Card,
    CardHeader,
    CardContent,
    Typography,
    Stack,
    Divider,
    Box,
} from "@mui/material";

import PermissionItem from "./PermissionItem";

function PermissionGroup({ group, selectedPermissions, onPermissionToggle }) {
    const isMultiColumn = group.permissions.length > 4;

    return (
        <Card variant="outlined" sx={{ height: "100%" }}>
            <CardHeader
                title={
                    <Typography variant="h6" fontWeight={600}>
                        {group.title}
                    </Typography>
                }
                sx={{ pb: 1 }}
            />
            <Divider />
            <CardContent>
                {isMultiColumn ? (
                    <Stack direction="row" spacing={2} flexWrap="wrap">
                        {group.permissions.map((permission) => (
                            <Box key={permission.key} sx={{ flex: "1 1 45%", minWidth: 120 }}>
                                <PermissionItem
                                    permission={permission}
                                    checked={selectedPermissions.includes(
                                        permission.key
                                    )}
                                    onToggle={onPermissionToggle}
                                />
                            </Box>
                        ))}
                    </Stack>
                ) : (
                    <Stack spacing={1.5}>
                        {group.permissions.map((permission) => (
                            <PermissionItem
                                key={permission.key}
                                permission={permission}
                                checked={selectedPermissions.includes(
                                    permission.key
                                )}
                                onToggle={onPermissionToggle}
                            />
                        ))}
                    </Stack>
                )}
            </CardContent>
        </Card>
    );
}

export default PermissionGroup;

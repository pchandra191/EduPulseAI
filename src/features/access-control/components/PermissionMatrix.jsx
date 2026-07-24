import { Grid } from "@mui/material";

import PermissionGroup from "./PermissionGroup";

function PermissionMatrix({ groups, selectedPermissions, onPermissionToggle }) {
    return (
        <Grid container spacing={3}>
            {groups.map((group) => (
                <Grid size={{ xs: 12, md: 6 }} key={group.id}>
                    <PermissionGroup
                        group={group}
                        selectedPermissions={selectedPermissions}
                        onPermissionToggle={onPermissionToggle}
                    />
                </Grid>
            ))}
        </Grid>
    );
}

export default PermissionMatrix;

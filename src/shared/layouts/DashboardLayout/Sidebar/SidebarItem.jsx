import {
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from "@mui/material";

import PermissionGuard from "@/features/auth/components/PermissionGuard";

function SidebarItem({
    title,
    icon: Icon,
    permission,
}) {
    const content = (
        <>
            <ListItemIcon>
                <Icon />
            </ListItemIcon>

            <ListItemText primary={title} />
        </>
    );

    if (permission) {
        return (
            <PermissionGuard permission={permission} fallback={null}>
                <ListItemButton>
                    {content}
                </ListItemButton>
            </PermissionGuard>
        );
    }

    return (
        <ListItemButton>
            {content}
        </ListItemButton>
    );
}

export default SidebarItem;
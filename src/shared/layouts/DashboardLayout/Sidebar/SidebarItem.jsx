import {
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from "@mui/material";

function SidebarItem({
    title,
    icon: Icon,
}) {
    return (
        <ListItemButton>

            <ListItemIcon>
                <Icon />
            </ListItemIcon>

            <ListItemText primary={title} />

        </ListItemButton>
    );
}

export default SidebarItem;
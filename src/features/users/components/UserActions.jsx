import {
    IconButton,
    Tooltip,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import SecurityIcon from "@mui/icons-material/Security";
import BlockIcon from "@mui/icons-material/Block";

function UserActions() {
    return (
        <>
            <Tooltip title="Edit">
                <IconButton size="small" aria-label="Edit user">
                    <EditIcon fontSize="small" />
                </IconButton>
            </Tooltip>

            <Tooltip title="Permissions">
                <IconButton size="small" aria-label="Manage permissions">
                    <SecurityIcon fontSize="small" />
                </IconButton>
            </Tooltip>

            <Tooltip title="Deactivate">
                <IconButton size="small" aria-label="Deactivate user">
                    <BlockIcon fontSize="small" />
                </IconButton>
            </Tooltip>
        </>
    );
}

export default UserActions;

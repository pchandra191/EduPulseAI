import { Chip } from "@mui/material";

function UserStatusChip({ status }) {
    const isActive = status === "Active";

    return (
        <Chip
            label={status}
            size="small"
            color={isActive ? "success" : "default"}
            variant="outlined"
        />
    );
}

export default UserStatusChip;

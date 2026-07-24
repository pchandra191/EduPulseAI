import {
    Button,
    Box,
} from "@mui/material";

function ActionButtons({ onSave, onReset, onCancel, disabled }) {
    return (
        <Box sx={{ display: "flex", flexDirection: "row", gap: 2, justifyContent: "flex-end" }}>
            <Button variant="outlined" onClick={onReset}>
                Reset
            </Button>
            <Button variant="outlined" onClick={onCancel}>
                Cancel
            </Button>
            <Button variant="contained" onClick={onSave} disabled={disabled}>
                Save Changes
            </Button>
        </Box>
    );
}

export default ActionButtons;

import { useMemo } from "react";
import {
    Autocomplete,
    TextField,
    Box,
    Avatar,
    Typography,
} from "@mui/material";

function UserSelector({ users, selectedUser, onUserChange }) {
    const options = useMemo(() => users.map((u) => ({ id: u.id, name: u.name, role: u.role })), [users]);

    const selectedOption = useMemo(
        () => options.find((o) => o.id === selectedUser?.id) || null,
        [options, selectedUser]
    );

    return (
        <Box sx={{ maxWidth: 400 }}>
            <Autocomplete
                options={options}
                value={selectedOption}
                onChange={onUserChange}
                getOptionLabel={(option) => option.name}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label="Search user..."
                        size="small"
                        placeholder="Search user..."
                    />
                )}
                renderOption={(props, option) => (
                    <li {...props} key={option.id}>
                        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, width: "100%" }}>
                            <Avatar sx={{ width: 28, height: 28, fontSize: 12 }}>
                                {option.name.charAt(0)}
                            </Avatar>
                            <Box>
                                <Typography variant="body2" fontWeight={500}>
                                    {option.name}
                                </Typography>
                                <Typography variant="caption" color="text.secondary">
                                    {option.role}
                                </Typography>
                            </Box>
                        </Box>
                    </li>
                )}
                noOptionsText="No users found"
                clearOnEscape
            />
        </Box>
    );
}

export default UserSelector;

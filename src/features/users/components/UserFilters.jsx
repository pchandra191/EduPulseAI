import { useMemo } from "react";
import {
    TextField,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
    Box,
    Stack,
} from "@mui/material";

function UserFilters({ users, filters, onFilterChange, onSearchChange }) {
    const roles = useMemo(() => {
        return Array.from(new Set(users.map((user) => user.role)));
    }, [users]);

    const statuses = useMemo(() => {
        return Array.from(new Set(users.map((user) => user.status)));
    }, [users]);

    const departments = useMemo(() => {
        return Array.from(new Set(users.map((user) => user.department)));
    }, [users]);

    return (
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <TextField
                label="Search users..."
                variant="outlined"
                size="small"
                value={filters.search}
                onChange={(e) => onSearchChange(e.target.value)}
                sx={{ minWidth: 280 }}
            />

            <Stack direction="row" spacing={2} flexWrap="wrap">
                <FormControl size="small" sx={{ minWidth: 160 }}>
                    <InputLabel id="role-filter-label">Role</InputLabel>
                    <Select
                        labelId="role-filter-label"
                        value={filters.role}
                        label="Role"
                        onChange={(e) => onFilterChange("role", e.target.value)}
                    >
                        <MenuItem value="">All</MenuItem>
                        {roles.map((role) => (
                            <MenuItem key={role} value={role}>
                                {role}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>

                <FormControl size="small" sx={{ minWidth: 160 }}>
                    <InputLabel id="status-filter-label">Status</InputLabel>
                    <Select
                        labelId="status-filter-label"
                        value={filters.status}
                        label="Status"
                        onChange={(e) => onFilterChange("status", e.target.value)}
                    >
                        <MenuItem value="">All</MenuItem>
                        {statuses.map((status) => (
                            <MenuItem key={status} value={status}>
                                {status}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>

                <FormControl size="small" sx={{ minWidth: 160 }}>
                    <InputLabel id="department-filter-label">Department</InputLabel>
                    <Select
                        labelId="department-filter-label"
                        value={filters.department}
                        label="Department"
                        onChange={(e) => onFilterChange("department", e.target.value)}
                    >
                        <MenuItem value="">All</MenuItem>
                        {departments.map((dept) => (
                            <MenuItem key={dept} value={dept}>
                                {dept}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Stack>
        </Box>
    );
}

export default UserFilters;

import { useMemo } from "react";
import {
    Box,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Avatar,
    Typography,
} from "@mui/material";

import UserStatusChip from "./UserStatusChip";
import UserActions from "./UserActions";

function getInitials(name) {
    if (!name) return "?";
    const parts = name.trim().split(" ");
    if (parts.length >= 2) {
        return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
    }
    return parts[0].slice(0, 2).toUpperCase();
}

function UserTable({ users }) {
    const filteredUsers = useMemo(() => {
        return users;
    }, [users]);

    return (
        <TableContainer component={Paper} variant="outlined" sx={{ overflowX: "auto" }}>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>User</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Role</TableCell>
                        <TableCell>Department</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell align="right">Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {filteredUsers.map((user) => (
                        <TableRow key={user.id} hover>
                            <TableCell>
                                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                                    <Avatar sx={{ width: 32, height: 32, fontSize: 12 }}>
                                        {getInitials(user.name)}
                                    </Avatar>
                                    <Typography variant="body2" fontWeight={500}>
                                        {user.name}
                                    </Typography>
                                </Box>
                            </TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.role}</TableCell>
                            <TableCell>{user.department}</TableCell>
                            <TableCell>
                                <UserStatusChip status={user.status} />
                            </TableCell>
                            <TableCell align="right">
                                <UserActions />
                            </TableCell>
                        </TableRow>
                    ))}

                    {filteredUsers.length === 0 && (
                        <TableRow>
                            <TableCell colSpan={6} align="center" sx={{ py: 4 }}>
                                <Typography variant="body2" color="text.secondary">
                                    No users found.
                                </Typography>
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default UserTable;

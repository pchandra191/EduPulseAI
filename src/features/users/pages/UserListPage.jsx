import { useState, useMemo } from "react";
import {
    Container,
    Stack,
    Box,
    Typography,
    Button,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

import { useUsers } from "../hooks/useUsers";
import UserFilters from "../components/UserFilters";
import UserTable from "../components/UserTable";

function UserListPage() {
    const { users, loading } = useUsers();
    const [search, setSearch] = useState("");
    const [filters, setFilters] = useState({
        role: "",
        status: "",
        department: "",
    });

    const handleSearchChange = (value) => {
        setSearch(value);
    };

    const handleFilterChange = (key, value) => {
        setFilters((prev) => ({ ...prev, [key]: value }));
    };

    const filteredUsers = useMemo(() => {
        return users.filter((user) => {
            const searchLower = search.toLowerCase();
            const matchesSearch =
                !search ||
                user.name.toLowerCase().includes(searchLower) ||
                user.email.toLowerCase().includes(searchLower) ||
                user.phone?.toLowerCase().includes(searchLower);

            const matchesRole = !filters.role || user.role === filters.role;
            const matchesStatus = !filters.status || user.status === filters.status;
            const matchesDepartment = !filters.department || user.department === filters.department;

            return matchesSearch && matchesRole && matchesStatus && matchesDepartment;
        });
    }, [users, search, filters]);

    return (
        <Container maxWidth="lg" sx={{ py: 4 }}>
            <Stack spacing={3}>
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                    <Stack spacing={0.5}>
                        <Typography variant="h4" fontWeight={600}>
                            Users
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                            Manage institute users.
                        </Typography>
                    </Stack>

                    <Button variant="contained" startIcon={<AddIcon />}>
                        New User
                    </Button>
                </Box>

                <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 2, alignItems: { md: "center" } }}>
                    <Box sx={{ flex: 1 }}>
                        <UserFilters
                            users={users}
                            filters={filters}
                            onFilterChange={handleFilterChange}
                            onSearchChange={handleSearchChange}
                        />
                    </Box>
                </Box>

                {loading ? (
                    <Typography variant="body2" color="text.secondary">
                        Loading users...
                    </Typography>
                ) : (
                    <UserTable users={filteredUsers} />
                )}
            </Stack>
        </Container>
    );
}

export default UserListPage;

import { useState, useMemo } from "react";
import {
    Container,
    Stack,
    Box,
    Typography,
} from "@mui/material";

import { PERMISSION_GROUPS } from "@/features/auth/permissions";
import UserSelector from "../components/UserSelector";
import UserSummaryCard from "../components/UserSummaryCard";
import PermissionMatrix from "../components/PermissionMatrix";
import ActionButtons from "../components/ActionButtons";

const MOCK_USERS = {
    "teacher-a": {
        id: "teacher-a",
        name: "Rahul Kumar",
        role: "Teacher",
        department: "Science",
        status: "Active",
        permissions: [
            "dashboard.view",
            "student.view",
            "teacher.view",
            "homework.view",
            "homework.create",
            "homework.edit",
            "notice.view",
            "notice.create",
            "notice.edit",
            "settings.view",
        ],
    },
    "teacher-b": {
        id: "teacher-b",
        name: "Amit Singh",
        role: "Institute Admin",
        department: "Administration",
        status: "Active",
        permissions: [
            "dashboard.view",
            "student.view",
            "homework.view",
            "notice.view",
        ],
    },
    "teacher-c": {
        id: "teacher-c",
        name: "Priya Sharma",
        role: "Teacher",
        department: "Mathematics",
        status: "Inactive",
        permissions: [
            "dashboard.view",
            "student.view",
            "teacher.view",
            "homework.view",
            "homework.create",
            "homework.edit",
            "homework.delete",
            "notice.view",
            "notice.create",
            "notice.edit",
            "notice.delete",
            "settings.view",
            "settings.edit",
        ],
    },
};

function AccessControlPage() {
    const [selectedUserId, setSelectedUserId] = useState("teacher-a");
    const [selectedPermissions, setSelectedPermissions] = useState(
        MOCK_USERS["teacher-a"].permissions
    );
    const [initialPermissions] = useState(
        MOCK_USERS["teacher-a"].permissions
    );

    const selectedUser = useMemo(
        () => MOCK_USERS[selectedUserId],
        [selectedUserId]
    );

    const handleUserChange = (event, newValue) => {
        const userId = newValue?.id;
        if (!userId) return;
        setSelectedUserId(userId);
        setSelectedPermissions(MOCK_USERS[userId].permissions);
    };

    const handlePermissionToggle = (permissionKey) => {
        setSelectedPermissions((prev) => {
            if (prev.includes(permissionKey)) {
                return prev.filter((key) => key !== permissionKey);
            }
            return [...prev, permissionKey];
        });
    };

    const handleSave = () => {
        console.log("Saving permissions for user:", selectedUserId);
        console.log("Selected permissions:", selectedPermissions);
    };

    const handleReset = () => {
        setSelectedPermissions([...initialPermissions]);
    };

    const handleCancel = () => {
        setSelectedUserId("teacher-a");
        setSelectedPermissions(MOCK_USERS["teacher-a"].permissions);
    };

    const hasChanges =
        selectedPermissions.length !== initialPermissions.length ||
        selectedPermissions.some((key) => !initialPermissions.includes(key));

    return (
        <Container maxWidth="lg" sx={{ py: 4 }}>
            <Stack spacing={3}>
                <Box>
                    <Typography variant="h4" fontWeight={600} gutterBottom>
                        Manage User Permissions
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        Grant or revoke module access for individual users.
                    </Typography>
                </Box>

                <UserSelector
                    users={Object.values(MOCK_USERS)}
                    selectedUser={selectedUser}
                    onUserChange={handleUserChange}
                />

                {selectedUser && (
                    <UserSummaryCard user={selectedUser} />
                )}

                <PermissionMatrix
                    groups={PERMISSION_GROUPS}
                    selectedPermissions={selectedPermissions}
                    onPermissionToggle={handlePermissionToggle}
                />

                <ActionButtons
                    onSave={handleSave}
                    onReset={handleReset}
                    onCancel={handleCancel}
                    disabled={!hasChanges}
                />
            </Stack>
        </Container>
    );
}

export default AccessControlPage;

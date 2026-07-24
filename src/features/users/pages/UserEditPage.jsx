import { useNavigate, useParams } from "react-router-dom";
import { Container, Stack, Typography, Box } from "@mui/material";

import UserForm from "../components/UserForm";
import { ROUTES } from "@/app/constants";
import { userApi } from "../api/userApi";

function UserEditPage() {
    const { id } = useParams();
    const navigate = useNavigate();

    const user = userApi.getUserById(id);

    const handleSubmit = (data) => {
        console.log("Update user:", { id, ...data });
        navigate(ROUTES.USERS);
    };

    const handleCancel = () => {
        navigate(ROUTES.USERS);
    };

    if (!user) {
        return (
            <Container maxWidth="lg" sx={{ py: 4 }}>
                <Typography variant="h4" fontWeight={600}>
                    User not found
                </Typography>
            </Container>
        );
    }

    const defaultValues = {
        firstName: user.name.split(" ")[0] || "",
        lastName: user.name.split(" ").slice(1).join(" ") || "",
        email: user.email,
        phone: user.phone || "",
        role: user.role,
        department: user.department,
        status: user.status,
    };

    return (
        <Container maxWidth="lg" sx={{ py: 4 }}>
            <Stack spacing={3}>
                <Box>
                    <Typography variant="h4" fontWeight={600} gutterBottom>
                        Edit User
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        Update user details and access.
                    </Typography>
                </Box>

                <UserForm
                    mode="edit"
                    defaultValues={defaultValues}
                    onSubmit={handleSubmit}
                    onCancel={handleCancel}
                    submitLabel="Update"
                />
            </Stack>
        </Container>
    );
}

export default UserEditPage;

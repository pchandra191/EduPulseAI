import { useNavigate } from "react-router-dom";
import { Container, Stack, Typography, Box } from "@mui/material";

import UserForm from "../components/UserForm";
import { ROUTES } from "@/app/constants";

function UserCreatePage() {
    const navigate = useNavigate();

    const handleSubmit = (data) => {
        console.log("Create user:", data);
        navigate(ROUTES.USERS);
    };

    const handleCancel = () => {
        navigate(ROUTES.USERS);
    };

    return (
        <Container maxWidth="lg" sx={{ py: 4 }}>
            <Stack spacing={3}>
                <Box>
                    <Typography variant="h4" fontWeight={600} gutterBottom>
                        Create User
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        Add a new user to the institute.
                    </Typography>
                </Box>

                <UserForm
                    mode="create"
                    onSubmit={handleSubmit}
                    onCancel={handleCancel}
                    submitLabel="Create"
                />
            </Stack>
        </Container>
    );
}

export default UserCreatePage;

import { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    Card,
    CardContent,
    Grid,
    TextField,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
    Box,
    Button,
    Typography,
} from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";

import { createUserSchema, editUserSchema } from "../validation/userSchema";

const ROLES = ["Institute Admin", "Teacher", "Student"];
const DEPARTMENTS = ["Science", "Commerce", "Arts", "Administration"];
const STATUSES = ["Active", "Inactive"];

function UserForm({
    mode = "create",
    defaultValues,
    onSubmit,
    onCancel,
    submitLabel = "Save",
}) {
    const schema = mode === "create" ? createUserSchema : editUserSchema;

    const {
        control,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm({
        resolver: zodResolver(schema),
        defaultValues: defaultValues || {
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            role: "",
            department: "",
            status: "Active",
            password: "",
            confirmPassword: "",
        },
    });

    useEffect(() => {
        if (defaultValues) {
            reset({
                ...defaultValues,
                password: "",
                confirmPassword: "",
            });
        }
    }, [defaultValues, reset]);

    const handleResetPassword = () => {
        console.log("Reset password clicked");
    };

    return (
        <Card variant="outlined">
            <CardContent>
                <Box
                    component="form"
                    onSubmit={handleSubmit(onSubmit)}
                    sx={{ display: "flex", flexDirection: "column", gap: 3 }}
                >
                    <Grid container spacing={2}>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Controller
                                name="firstName"
                                control={control}
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        label="First Name"
                                        fullWidth
                                        error={!!errors.firstName}
                                        helperText={errors.firstName?.message}
                                        required
                                    />
                                )}
                            />
                        </Grid>

                        <Grid size={{ xs: 12, md: 6 }}>
                            <Controller
                                name="lastName"
                                control={control}
                                render={({field}) => (
                                    <TextField
                                        {...field}
                                        label="Last Name"
                                        fullWidth
                                        error={!!errors.lastName}
                                        helperText={errors.lastName?.message}
                                        required
                                    />
                                )}
                            />
                        </Grid>

                        <Grid size={{ xs: 12, md: 6 }}>
                            <Controller
                                name="email"
                                control={control}
                                render={({field}) => (
                                    <TextField
                                        {...field}
                                        label="Email"
                                        fullWidth
                                        error={!!errors.email}
                                        helperText={errors.email?.message}
                                        required
                                    />
                                )}
                            />
                        </Grid>

                        <Grid size={{ xs: 12, md: 6 }}>
                            <Controller
                                name="phone"
                                control={control}
                                render={({field}) => (
                                    <TextField
                                        {...field}
                                        label="Phone"
                                        fullWidth
                                        error={!!errors.phone}
                                        helperText={errors.phone?.message}
                                        required
                                    />
                                )}
                            />
                        </Grid>

                        <Grid size={{ xs: 12, md: 6 }}>
                            <Controller
                                name="role"
                                control={control}
                                render={({field}) => (
                                    <FormControl fullWidth error={!!errors.role} required>
                                        <InputLabel id="role-label">Role</InputLabel>
                                        <Select
                                            {...field}
                                            labelId="role-label"
                                            label="Role"
                                        >
                                            {ROLES.map((role) => (
                                                <MenuItem key={role} value={role}>
                                                    {role}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                        {errors.role && (
                                            <Typography variant="caption" color="error" sx={{ mt: 0.5, ml: 1.5 }}>
                                                {errors.role.message}
                                            </Typography>
                                        )}
                                    </FormControl>
                                )}
                            />
                        </Grid>

                        <Grid size={{ xs: 12, md: 6 }}>
                            <Controller
                                name="department"
                                control={control}
                                render={({field}) => (
                                    <Autocomplete
                                        {...field}
                                        options={DEPARTMENTS}
                                        value={field.value || null}
                                        onChange={(_, newValue) => field.onChange(newValue || "")}
                                        renderInput={(params) => (
                                            <TextField
                                                {...params}
                                                label="Department"
                                                error={!!errors.department}
                                                helperText={errors.department?.message}
                                                required
                                            />
                                        )}
                                    />
                                )}
                            />
                        </Grid>

                        <Grid size={{ xs: 12, md: 6 }}>
                            <Controller
                                name="status"
                                control={control}
                                render={({field}) => (
                                    <FormControl fullWidth error={!!errors.status} required>
                                        <InputLabel id="status-label">Status</InputLabel>
                                        <Select
                                            {...field}
                                            labelId="status-label"
                                            label="Status"
                                        >
                                            {STATUSES.map((status) => (
                                                <MenuItem key={status} value={status}>
                                                    {status}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                        {errors.status && (
                                            <Typography variant="caption" color="error" sx={{ mt: 0.5, ml: 1.5 }}>
                                                {errors.status.message}
                                            </Typography>
                                        )}
                                    </FormControl>
                                )}
                            />
                        </Grid>

                        {mode === "create" ? (
                            <>
                                <Grid size={{ xs: 12, md: 6 }}>
                                    <Controller
                                        name="password"
                                        control={control}
                                        render={({field}) => (
                                            <TextField
                                                {...field}
                                                label="Password"
                                                type="password"
                                                fullWidth
                                                error={!!errors.password}
                                                helperText={errors.password?.message}
                                                required
                                            />
                                        )}
                                    />
                                </Grid>

                                <Grid size={{ xs: 12, md: 6 }}>
                                    <Controller
                                        name="confirmPassword"
                                        control={control}
                                        render={({field}) => (
                                            <TextField
                                                {...field}
                                                label="Confirm Password"
                                                type="password"
                                                fullWidth
                                                error={!!errors.confirmPassword}
                                                helperText={errors.confirmPassword?.message}
                                                required
                                            />
                                        )}
                                    />
                                </Grid>
                            </>
                        ) : (
                            <Grid size={{ xs: 12 }}>
                                <Button variant="outlined" onClick={handleResetPassword}>
                                    Reset Password
                                </Button>
                            </Grid>
                        )}
                    </Grid>

                    <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 1.5, mt: 2 }}>
                        <Button variant="outlined" onClick={onCancel} disabled={isSubmitting}>
                            Cancel
                        </Button>
                        <Button type="submit" variant="contained" disabled={isSubmitting}>
                            {submitLabel}
                        </Button>
                    </Box>
                </Box>
            </CardContent>
        </Card>
    );
}

export default UserForm;

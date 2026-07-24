import { z } from "zod";

export const createUserSchema = z.object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    email: z.string().email("Invalid email address"),
    phone: z.string().min(1, "Phone is required"),
    role: z.string().min(1, "Role is required"),
    department: z.string().min(1, "Department is required"),
    status: z.string().min(1, "Status is required"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string().min(1, "Confirm password is required"),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
});

export const editUserSchema = z.object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    email: z.string().email("Invalid email address"),
    phone: z.string().min(1, "Phone is required"),
    role: z.string().min(1, "Role is required"),
    department: z.string().min(1, "Department is required"),
    status: z.string().min(1, "Status is required"),
});


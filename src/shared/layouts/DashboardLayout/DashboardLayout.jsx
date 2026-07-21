import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

import Sidebar from "./Sidebar";
import TopNavbar from "./TopNavbar";

function DashboardLayout() {
    return (
        <Box sx={{ display: "flex" }}>
            <Sidebar />

            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    minHeight: "100vh",
                    bgcolor: "background.default",
                }}
            >
                <TopNavbar />

                <Box p={3}>
                    <Outlet />
                </Box>
            </Box>
        </Box>
    );
}

export default DashboardLayout;
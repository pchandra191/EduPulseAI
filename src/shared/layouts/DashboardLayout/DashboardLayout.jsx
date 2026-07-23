import { useState } from "react";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

import Sidebar from "./Sidebar";
import TopNavbar from "@/features/dashboard/components/TopNavbar";

const DRAWER_WIDTH = 260;

function DashboardLayout() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <TopNavbar onMenuToggle={handleDrawerToggle} />

      <Box sx={{ display: "flex", flexGrow: 1 }}>
        <Sidebar
          mobileOpen={mobileOpen}
          onClose={handleDrawerToggle}
        />

        <Box
          component="main"
          sx={{
            flexGrow: 1,
            minHeight: "100vh",
            bgcolor: "background.default",
            width: {
              md: `calc(100% - ${DRAWER_WIDTH}px)`,
            },
            mt: "64px",
          }}
        >
          <Box p={3}>
            <Outlet />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default DashboardLayout;
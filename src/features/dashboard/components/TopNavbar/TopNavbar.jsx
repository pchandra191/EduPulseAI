import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import MenuIcon from "@mui/icons-material/Menu";

import SearchBar from "./SearchBar";
import NotificationMenu from "./NotificationMenu";
import UserMenu from "./UserMenu";

const TopNavbar = ({ onMenuToggle }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <AppBar
      position="sticky"
      color="inherit"
      elevation={1}
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        borderBottom: 1,
        borderColor: "divider",
        backdropFilter: "blur(8px)",
        bgcolor: "background.paper",
      }}
    >
      <Toolbar sx={{ minHeight: 64 }}>
        {/* Sidebar Toggle */}
        <IconButton
          edge="start"
          color="inherit"
          onClick={onMenuToggle}
          sx={{
            mr: 2,
            display: {
              xs: "flex",
              lg: "none",
            },
          }}
        >
          <MenuIcon />
        </IconButton>

        {/* Logo */}
        <Typography
          variant="h6"
          component="h1"
          noWrap
          sx={{
            fontWeight: 700,
            flexShrink: 0,
          }}
        >
          EduPulse AI
        </Typography>

        {/* Search */}
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            justifyContent: "center",
            px: {
              xs: 0,
              md: 3,
            },
          }}
        >
          {!isMobile && <SearchBar />}
        </Box>

        {/* Right Actions */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            flexShrink: 0,
          }}
        >
          <NotificationMenu />

          {!isMobile && (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
                mx: 1,
              }}
            >
              <Typography
                variant="body2"
                fontWeight={600}
              >
                Admin User
              </Typography>

              <Typography
                variant="caption"
                color="text.secondary"
              >
                Administrator
              </Typography>
            </Box>
          )}

          <UserMenu />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default TopNavbar;
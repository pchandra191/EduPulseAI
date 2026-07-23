import { useState } from "react";
import {
  Avatar,
  Divider,
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
} from "@mui/material";

import PersonIcon from "@mui/icons-material/Person";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

const UserMenu = ({
  user = {
    firstName: "Admin",
    lastName: "User",
    email: "admin@edupulse.ai",
  },
  onLogout = () => {},
}) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  const handleOpen = (event) => setAnchorEl(event.currentTarget);

  const handleClose = () => setAnchorEl(null);

  return (
    <>
      <IconButton onClick={handleOpen}>
        <Avatar>
          {user.firstName?.charAt(0).toUpperCase()}
        </Avatar>
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem disabled>
          <ListItemText
            primary={`${user.firstName} ${user.lastName}`}
            secondary={user.email}
          />
        </MenuItem>

        <Divider />

        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <PersonIcon  fontSize="small" />
          </ListItemIcon>
          My Profile
        </MenuItem>

        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <SettingsOutlinedIcon fontSize="small" />
          </ListItemIcon>
          Account Settings
        </MenuItem>

        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <LockOutlinedIcon fontSize="small" />
          </ListItemIcon>
          Change Password
        </MenuItem>

        <Divider />

        <MenuItem
          onClick={() => {
            handleClose();
            onLogout();
          }}
        >
          <ListItemIcon>
            <LogoutOutlinedIcon fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </>
  );
};

export default UserMenu;
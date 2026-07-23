import { useState } from "react";
import {
  Badge,
  Divider,
  IconButton,
  ListItemText,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";

import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";

const NotificationMenu = ({
  notifications = [],
  unreadCount = 0,
}) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  const handleOpen = (event) => setAnchorEl(event.currentTarget);

  const handleClose = () => setAnchorEl(null);

  return (
    <>
      <IconButton color="inherit" onClick={handleOpen}>
        <Badge
          badgeContent={unreadCount}
          color="error"
        >
          <NotificationsOutlinedIcon />
        </Badge>
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          sx: {
            width: 340,
            maxHeight: 420,
          },
        }}
      >
        <MenuItem disabled>
          <Typography variant="subtitle1" fontWeight={600}>
            Notifications
          </Typography>
        </MenuItem>

        <Divider />

        {notifications.length === 0 ? (
          <MenuItem disabled>
            <ListItemText
              primary="No new notifications"
              secondary="You're all caught up."
            />
          </MenuItem>
        ) : (
          notifications.map((item) => (
            <MenuItem
              key={item.id}
              onClick={handleClose}
            >
              <ListItemText
                primary={item.title}
                secondary={item.message}
              />
            </MenuItem>
          ))
        )}

        <Divider />

        <MenuItem onClick={handleClose}>
          View All Notifications
        </MenuItem>
      </Menu>
    </>
  );
};

export default NotificationMenu;
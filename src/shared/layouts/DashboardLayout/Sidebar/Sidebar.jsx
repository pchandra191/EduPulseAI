import { Drawer, List } from "@mui/material";

import SidebarHeader from "./SidebarHeader";
import SidebarItem from "./SidebarItem";
import { menuItems } from "./menuConfig";

function Sidebar() {
    return (
        <Drawer
            variant="permanent"
            sx={{
                width: 260,
                flexShrink: 0,
                "& .MuiDrawer-paper": {
                    width: 260,
                    boxSizing: "border-box",
                },
            }}
        >
            <SidebarHeader />

            <List>
                {menuItems.map((item) => (
                    <SidebarItem
                        key={item.id}
                        {...item}
                    />
                ))}
            </List>
        </Drawer>
    );
}

export default Sidebar;
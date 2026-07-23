import { List } from "@mui/material";

import SidebarHeader from "./SidebarHeader";
import SidebarItem from "./SidebarItem";
import { menuItems } from "./menuConfig";

const SidebarContent = ({ onItemClick }) => {
  return (
    <>
      <SidebarHeader />

      <List>
        {menuItems.map((item) => (
          <SidebarItem
            key={item.id}
            {...item}
            onClick={onItemClick}
          />
        ))}
      </List>
    </>
  );
};

export default SidebarContent;
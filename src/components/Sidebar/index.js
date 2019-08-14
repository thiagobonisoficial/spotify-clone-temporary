import React from "react";

// STYLES
import Aside from "./styles";

// SUBCOMPONENT'S
import { Icon, MenuList, MenuPlaylist, MenuUser } from "components";

const Sidebar = () => {
  return (
    <Aside>
      <Icon
        theme="logo"
        fontSize="2.6rem"
        color="white"
        padding="1.5rem 3rem 1.5rem 0"
      />
      <MenuList />
      <MenuPlaylist />
      <MenuUser />
    </Aside>
  );
};

export default Sidebar;

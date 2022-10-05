import React from "react";
import { Drawer } from "@mui/material";

interface SideDrawerProps {
  drawerState: boolean;
  handleClose: () => void;
  list: any; // {id: number, text: string, image: string}[];
  position?: string | any;
}

function SideDrawer({
  drawerState,
  handleClose,
  list,
  position,
}: SideDrawerProps) {
  return (
    <Drawer
      variant="temporary"
      onClose={handleClose}
      open={drawerState}
      anchor={position}
    >
      {list}
    </Drawer>
  );
}

export default SideDrawer;

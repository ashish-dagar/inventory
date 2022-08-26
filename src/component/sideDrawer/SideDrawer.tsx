import { Drawer, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import List from '@mui/material/List';

interface SideDrawerProps {
  drawerState: boolean;
  handleClose: () => void;
  list: any; // {id: number, text: string, image: string}[];
  position?: string | any;
}

function SideDrawer({drawerState, handleClose, list, position}: SideDrawerProps) {

  // const getList = (list: { id: number; text: string; image: string; }[]) => {
  //   return (
  //     <List>
  //       {list.map(item => {
  //         return (
  //           <ListItem key={item.id} disablePadding>
  //           <ListItemButton>
  //             <ListItemIcon>
                
  //             </ListItemIcon>
  //             <ListItemText primary={item.text} />
  //           </ListItemButton>
  //         </ListItem>
  //         )
  //       })}
  //     </List>
  //   )
  // }
  //console.log("ppppppppppppppppppp", (list))
  return (
    <Drawer variant='temporary'
        onClose={handleClose}
        open={drawerState}
        anchor={position}
      >
        {list}
       {/* {getList(list)} */}
      </Drawer>
  );
}

export default SideDrawer;
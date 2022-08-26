import { useState } from 'react';
import styles from './App.module.css';
import SideDrawer from './component/sideDrawer/SideDrawer';
import { Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { drawerList } from './constant';
function SidePanel() {
  const [drawerState, setDrawerState] = useState(false)
  const handleClose = () => {
    setDrawerState(false);
  }

  const getList = (list: { id: number; text: string; image: string; }[]) => {
    return (
      <List>
        {list.map(item => {
          return (
            <ListItem key={item.id} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
          )
        })}
      </List>
    )
  }
  return (
    <>
    {/* <div className={styles.upperHeader}></div> */}
      <div className={styles.sideContainer}>
        <button onClick={() => setDrawerState(true)}/>
        <SideDrawer
          drawerState={drawerState}
          handleClose={handleClose}
          list={getList(drawerList)}//{drawerList} 
          position="left"
        />
      </div>
    </>
  );
}

export default SidePanel;
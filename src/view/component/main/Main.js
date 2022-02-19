import React from "react";

import ContentViewer from "./ContentViewer";
import LeftPanel from "./leftPanel/LeftPanel";

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';



export default function Main(props) {  
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const drawerWidth = 320;
  const drawer = (
      <LeftPanel/>
  );
  const container = window !== undefined ? () => window().document.body : undefined;
  return (
    <Box className="main_body d_flex">             
      <Box
      className="left_panel_body"
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
         <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            position="fixed"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' }, 
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },}}
          >
            <MenuIcon />
          </IconButton>
       {/* mobile view */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
         {/*end mobile view */}

          {/* desktop view */}
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
         {/*end desktop view */}
      </Box>
      <Box
     className="main_content"
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
      <ContentViewer/>
      </Box>
    </Box>
  );
}



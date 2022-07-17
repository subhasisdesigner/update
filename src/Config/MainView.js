import React from "react";
import ContentViewer from "./ContentRoute";
import LeftPanel from "../view/component/leftPanel";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import { NavLink } from "react-router-dom";

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import MoreIcon from '@mui/icons-material/MoreVert';

export default function MainView(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const drawerWidth = 320;
  const drawer = (
    <LeftPanel />
  );
  const container = window !== undefined ? () => window().document.body : undefined;
  return (
    <Box className="main_body d_flex">
      <Box
        className="left_panel_body"
        component="nav"
        sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
        aria-label="mailbox folders"
      >
        {/*start AppBar */}


        {/* <CardActionArea
          className="menu_bar"
          color="inherit"
          aria-label="open drawer"
          edge="start"
          position="fixed"
          onClick={handleDrawerToggle}
          sx={{
            mr: 2, display: { md: 'none' },
            width: { md: `calc(100% - ${drawerWidth}px)` },
            ml: { md: `${drawerWidth}px` },
          }}
        >
          <MenuIcon />
        </CardActionArea> */}
        {/* <AppBarMenu
          sx={{
            mr: 2, display: { md: 'none' },
            width: { md: `calc(100% - ${drawerWidth}px)` },
            ml: { md: `${drawerWidth}px` },
          }}
        /> */}
        <div className="appbar" sx={{
          mr: 2, display: { md: 'none' },
          width: { md: `calc(100% - ${drawerWidth}px)` },
          ml: { md: `${drawerWidth}px` },
        }}>
          <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }}>
            <Toolbar>
              <IconButton color="inherit">
                <NavLink exact className="introduction" activeClassName="active_menu" to="/update"><i className="ri-mic-fill"></i></NavLink>
              </IconButton>
              <IconButton color="inherit" aria-label="open drawer">
                <NavLink exact className="skills" activeClassName="active_menu" to="/update/about"><i className="ri-user-settings-fill"></i></NavLink>
              </IconButton>
              <IconButton color="inherit" onClick={handleDrawerToggle}>
                <MoreIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
        </div>

        {/*end start AppBar */}


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
            display: { xs: 'block', sm: 'block', md: 'none' },
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
            display: { xs: 'none', sm: 'none', md: 'block' },
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
        sx={{ flexGrow: 1, p: 3, width: { md: `calc(100% - ${drawerWidth}px)` } }}
      >
        <ContentViewer />
      </Box>
    </Box>
  );
}



import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import DashboardCustomizeRoundedIcon from "@mui/icons-material/DashboardCustomizeRounded";
import GroupAddRoundedIcon from "@mui/icons-material/GroupAddRounded";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import HailRoundedIcon from "@mui/icons-material/HailRounded";
import HolidayVillageRoundedIcon from "@mui/icons-material/HolidayVillageRounded";
import NotificationsActiveRoundedIcon from "@mui/icons-material/NotificationsActiveRounded";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import TableChartRoundedIcon from "@mui/icons-material/TableChartRounded";
import PersonRemoveRoundedIcon from "@mui/icons-material/PersonRemoveRounded";
import { Outlet, useNavigate } from "react-router-dom";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";
import Avatar from '@mui/material/Avatar';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const navigate = useNavigate();
  const Dashboard = () => {
    navigate("/dashboard")
  }
  const Recruitment = () =>{
    navigate('/dashboard/recruitment')
  }
  const Employee = () => {
    navigate("/dashboard/employee");
  };
  const Logout = () => {
    navigate("/");
  };
  const Attendence = () => {
    navigate("/dashboard/attendence");
  };
  const Notice = () => {
    navigate("/dashboard/Notice")
  }
  const Holiday = () => {
    navigate("/dashboard/Holiday");
  }
  const Leave = () => {
    navigate("/dashboard/Leave");
  }
  const Setting = () => {
    navigate("/dashboard/Setting")
  }

  return (
    <>
      <div>
        <div>
          <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <AppBar position="fixed">
              <Toolbar style={{ background: "rgb(24,40,90)" }}>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  onClick={handleDrawerOpen}
                  edge="start"
                  sx={{
                    marginRight: 5,
                    ...(open && { display: "none" }),
                  }}
                >
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6" noWrap component="div">
                  Admin
                </Typography>
                <Paper
                  component="form"
                  sx={{
                    p: "2px 4px",
                    display: "flex",
                    alignItems: "center",
                    width: 400,
                    marginLeft: 110,
                  }}
                >
                  <IconButton sx={{ p: "10px" }} aria-label="menu">
                    <MenuIcon />
                  </IconButton>
                  <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Search Employee"
                    inputProps={{ "aria-label": "search google maps" }}
                  />
                  <IconButton
                    type="button"
                    sx={{ p: "10px" }}
                    aria-label="search"
                  >
                    <SearchIcon />
                  </IconButton>
                  <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                  <IconButton
                    color="primary"
                    sx={{ p: "10px" }}
                    aria-label="directions"
                  >
                    <DirectionsIcon />
                  </IconButton>
                </Paper>
                <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" style={{margin:"10px"}} />
              </Toolbar>
            </AppBar>
            <Drawer variant="permanent" open={open}>
              <DrawerHeader>
                <IconButton onClick={handleDrawerClose}>
                  {theme.direction === "rtl" ? (
                    <ChevronRightIcon />
                  ) : (
                    <ChevronLeftIcon />
                  )}
                </IconButton>
              </DrawerHeader>
              <Divider />
              <div style={{ background: "rgb(24,40,90)", height:"900px"}}>
                <List  striped bordered hover>
                  {["Dashboard"].map((text, index) => (
                    <ListItem
                      key={text}
                      disablePadding
                      sx={{ display: "block",color:"white" }}
                      onClick={Dashboard}
                    >
                      <ListItemButton
                        sx={{
                          minHeight: 48,
                          justifyContent: open ? "initial" : "center",
                          px: 2.5,
                        }}
                      >
                        <ListItemIcon
                          sx={{
                            minWidth: 0,
                            mr: open ? 3 : "auto",
                            justifyContent: "center",
                          }}
                        >
                          {index % 2 === 0 ? (
                            <DashboardCustomizeRoundedIcon style={{backgroundColor:"white"}} />
                          ) : (
                            <MailIcon />
                          )}
                        </ListItemIcon>
                        <ListItemText
                          primary={text}
                          sx={{ opacity: open ? 1 : 0 }}
                        />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
                <List>
                  {["Recruitment"].map((text, index) => (
                    <ListItem
                      key={text}
                      disablePadding
                      sx={{ display: "block",color:"white" }}
                      onClick={Recruitment}
                    >
                      <ListItemButton
                        sx={{
                          minHeight: 48,
                          justifyContent: open ? "initial" : "center",
                          px: 2.5,
                        }}
                      >
                        <ListItemIcon
                          sx={{
                            minWidth: 0,
                            mr: open ? 3 : "auto",
                            justifyContent: "center",
                          }}
                        >
                          {index % 2 === 0 ? (
                            <GroupAddRoundedIcon style={{backgroundColor:"white"}}/>
                          ) : (
                            <MailIcon />
                          )}
                        </ListItemIcon>
                        <ListItemText
                          primary={text}
                          sx={{ opacity: open ? 1 : 0 }}
                        />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
                <List>
                  {["Employee"].map((text, index) => (
                    <ListItem
                      key={text}
                      disablePadding
                      sx={{ display: "block",color:"white"}}
                      onClick={Employee}
                    >
                      <ListItemButton
                        sx={{
                          minHeight: 48,
                          justifyContent: open ? "initial" : "center",
                          px: 2.5,
                        }}
                      >
                        <ListItemIcon
                          sx={{
                            minWidth: 0,
                            mr: open ? 3 : "auto",
                            justifyContent: "center",
                          }}
                        >
                          {index % 2 === 0 ? (
                            <GroupsRoundedIcon style={{backgroundColor:"white"}}/>
                          ) : (
                            <MailIcon />
                          )}
                        </ListItemIcon>
                        <ListItemText
                          primary={text}
                          sx={{ opacity: open ? 1 : 0 }}
                        />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
                <Divider />
                <List>
                  {["Attendence"].map((text, index) => (
                    <ListItem
                      key={text}
                      disablePadding
                      sx={{ display: "block" ,color:"white"}}
                      onClick={Attendence}
                    >
                      <ListItemButton
                        sx={{
                          minHeight: 48,
                          justifyContent: open ? "initial" : "center",
                          px: 2.5,
                        }}
                      >
                        <ListItemIcon
                          sx={{
                            minWidth: 0,
                            mr: open ? 3 : "auto",
                            justifyContent: "center",
                          }}
                        >
                          {index % 2 === 0 ? <HailRoundedIcon style={{backgroundColor:"white"}} /> : <MailIcon />}
                        </ListItemIcon>
                        <ListItemText
                          primary={text}
                          sx={{ opacity: open ? 1 : 0 }}
                        />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
                <List>
                  {["Notice"].map((text, index) => (
                    <ListItem
                      key={text}
                      disablePadding
                      sx={{ display: "block",color:"white" }}
                      onClick={Notice}
                    >
                      <ListItemButton
                        sx={{
                          minHeight: 48,
                          justifyContent: open ? "initial" : "center",
                          px: 2.5,
                        }}
                      >
                        <ListItemIcon
                          sx={{
                            minWidth: 0,
                            mr: open ? 3 : "auto",
                            justifyContent: "center",
                          }}
                        >
                          {index % 2 === 0 ? (
                            <NotificationsActiveRoundedIcon style={{backgroundColor:"white"}}/>
                          ) : (
                            <MailIcon />
                          )}
                        </ListItemIcon>
                        <ListItemText
                          primary={text}
                          sx={{ opacity: open ? 1 : 0 }}
                        />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
                <List>
                  {["Holiday"].map((text, index) => (
                    <ListItem
                      key={text}
                      disablePadding
                      sx={{ display: "block",color:"white" }}
                      onClick={Holiday}
                    >
                      <ListItemButton
                        sx={{
                          minHeight: 48,
                          justifyContent: open ? "initial" : "center",
                          px: 2.5,
                        }}
                      >
                        <ListItemIcon
                          sx={{
                            minWidth: 0,
                            mr: open ? 3 : "auto",
                            justifyContent: "center",
                          }}
                        >
                          {index % 2 === 0 ? (
                            <HolidayVillageRoundedIcon style={{backgroundColor:"white"}} />
                          ) : (
                            <MailIcon />
                          )}
                        </ListItemIcon>
                        <ListItemText
                          primary={text}
                          sx={{ opacity: open ? 1 : 0 }}
                        />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
                <List>
                  {["Leave"].map((text, index) => (
                    <ListItem
                      key={text}
                      disablePadding
                      sx={{ display: "block",color:"white" }}
                      onClick={Leave}
                    >
                      <ListItemButton
                        sx={{
                          minHeight: 48,
                          justifyContent: open ? "initial" : "center",
                          px: 2.5,
                        }}
                      >
                        <ListItemIcon
                          sx={{
                            minWidth: 0,
                            mr: open ? 3 : "auto",
                            justifyContent: "center",
                          }}
                        >
                          {index % 2 === 0 ? (
                            <PersonRemoveRoundedIcon style={{backgroundColor:"white"}} />
                          ) : (
                            <MailIcon />
                          )}
                        </ListItemIcon>
                        <ListItemText
                          primary={text}
                          sx={{ opacity: open ? 1 : 0 }}
                        />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
                <List>
                  {["Department"].map((text, index) => (
                    <ListItem
                      key={text}
                      disablePadding
                      sx={{ display: "block",color:"white" }}
                    >
                      <ListItemButton
                        sx={{
                          minHeight: 48,
                          justifyContent: open ? "initial" : "center",
                          px: 2.5,
                        }}
                      >
                        <ListItemIcon
                          sx={{
                            minWidth: 0,
                            mr: open ? 3 : "auto",
                            justifyContent: "center",
                          }}
                        >
                          {index % 2 === 0 ? (
                            <TableChartRoundedIcon style={{backgroundColor:"white"}}/>
                          ) : (
                            <MailIcon />
                          )}
                        </ListItemIcon>
                        <ListItemText
                          primary={text}
                          sx={{ opacity: open ? 1 : 0 }}
                        />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
                <List>
                  {["Setting"].map((text, index) => (
                    <ListItem
                      key={text}
                      disablePadding
                      sx={{ display: "block",color:"white" }}
                      onClick={Setting}
                    >
                      <ListItemButton
                        sx={{
                          minHeight: 48,
                          justifyContent: open ? "initial" : "center",
                          px: 2.5,
                        }}
                      >
                        <ListItemIcon
                          sx={{
                            minWidth: 0,
                            mr: open ? 3 : "auto",
                            justifyContent: "center",
                          }}
                        >
                          {index % 2 === 0 ? <SettingsIcon style={{backgroundColor:"white"}}/> : <MailIcon />}
                        </ListItemIcon>
                        <ListItemText
                          primary={text}
                          sx={{ opacity: open ? 1 : 0 }}
                        />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
                <List>
                  {["Logout"].map((text, index) => (
                    <ListItem
                      key={text}
                      disablePadding
                      sx={{ display: "block",color:"white" }}
                      onClick={Logout}
                    >
                      <ListItemButton
                        sx={{
                          minHeight: 48,
                          justifyContent: open ? "initial" : "center",
                          px: 2.5,
                        }}
                      >
                        <ListItemIcon
                          sx={{
                            minWidth: 0,
                            mr: open ? 3 : "auto",
                            justifyContent: "center",
                          }}
                        >
                          {index % 2 === 0 ? <LogoutRoundedIcon style={{backgroundColor:"white"}} /> : <MailIcon />}
                        </ListItemIcon>
                        <ListItemText
                          primary={text}
                          sx={{ opacity: open ? 1 : 0 }}
                        />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </div>
              <Divider />
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
              <DrawerHeader />
          <Outlet />
            </Box>
          </Box>
        </div>
        <div>
        </div>
      </div>
    </>
  );
}

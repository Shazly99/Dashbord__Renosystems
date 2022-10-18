import React, { useState } from 'react'
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import MenuOpenRoundedIcon from '@mui/icons-material/MenuOpenRounded';
import Body from './Body';
import CurrData from './CurrData';
import HelpOutlineRoundedIcon from '@mui/icons-material/HelpOutlineRounded';
import NotificationImportantRoundedIcon from '@mui/icons-material/NotificationImportantRounded';
 
 

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }),
);

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

export default function PersistentDrawerLeft() {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    let listData = ['Inbox', 'Starred', 'Send email', 'Drafts']
    const [search, setSearch] = useState();

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };


    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" open={open}>
                <Toolbar className='bg-w'>
                    <IconButton className='c-black' aria-label="open drawer" onClick={handleDrawerOpen} edge="start" sx={{ mr: 2, ...(open && { display: 'none' }) }}>
                        <MenuIcon />
                    </IconButton>
                    <IconButton onClick={handleDrawerClose} className='c-black' sx={{ display: 'none', mr: 2, ...(open && { display: 'display' }) }}>
                        {theme.direction === 'ltr' ? <MenuOpenRoundedIcon /> : <MenuOpenRoundedIcon />}
                    </IconButton>
                    <Typography className='c-black nav__bar' variant="h6" noWrap component="div">
                        <CurrData />
                        <div className='navbar__left'>
                            <HelpOutlineRoundedIcon className='help__Icon' />
                                 <NotificationImportantRoundedIcon className='Notification__Icon' />
                                <span className='navbar__left-notify'>9+</span>
                             <div className='header__username'>
                                <span className='usename'>Nader Amer</span>
                                <span className='usename2'>NA</span>
                            </div>
                        </div>
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}
                className='sidebar'
            >
                <DrawerHeader className='head__sidebar'>
                    <img className='logo_reno_system' src="https://user-images.githubusercontent.com/57854391/196166361-5804d8e3-b96d-4d10-908a-64c34efd2973.png" />
                    <input type="text" placeholder='Quick access'
                        onChange={(event) => {
                            setSearch(event.target.value)
                        }} />
                </DrawerHeader>
                <Divider />
                <List>
                    <ListItemButton>
                        <ListItemIcon className='dashbord_flex'>
                            <DashboardIcon className='c-w' primary="Dashbord" />
                            <span className='c-w dashbord_text'>Dashbord</span>
                        </ListItemIcon>
                        <ListItemText className='c-w' />
                    </ListItemButton>
                    <ListItem className='c-w  ' disablePadding>
                        <span className='c-sitting p-10 mt-15 dashbord_text'>SETTINGS</span>
                    </ListItem>
            
                     {
                        search ?
                            listData.filter((valu) => {
                                if (search === "") {
                                    return valu
                                } else if (valu.toLowerCase().includes(search.toLowerCase())) {
                                    return valu
                                }
                            }).map((text, index) => {
                                return (
                                    <ListItem className='c-w bg-g' key={text} disablePadding>
                                        <ListItemButton >
                                            <ListItemText className='c-w bg-g' primary={text} />
                                        </ListItemButton>
                                    </ListItem>

                                )
                            })
                            :
                            listData.map((text, index) => (
                                <ListItem key={text} disablePadding>
                                    <ListItemButton>
                                        <ListItemText className='c-w list__text' primary={text} />
                                    </ListItemButton>
                                </ListItem>
                            ))
                    }
                </List>

            </Drawer>
            <Main open={open} className="mt-5">
                <Body />
            </Main>
        </Box>
    );
}
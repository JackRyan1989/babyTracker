import React, { useState } from 'react';
import clsx from 'clsx';
import { Redirect } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import LockIcon from '@material-ui/icons/Lock';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import AddIcon from '@material-ui/icons/Add';
import VisibilityIcon from '@material-ui/icons/Visibility';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import Grid from '@material-ui/core/Grid';
import AddDataButton from './button';
import DisplayBurden from '../components/displayBurden';
import SleepGraph from '../components/sleepGraph';
import SleepWakeGraph from '../components/sleepWakeGraph';
import MovementGraph from '../components/movementGraph';
import MovementListing from '../components/movementList';
import DownloadButton from '../components/downloadButton';
import SimpleTimer from '../components/timer';
import ContractionLog from '../components/contractionLog';
import moment from 'moment';

const drawerWidth = 240;

const dayStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1,
        },
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(1),
    },
    button: {
        alignItems: 'center',
        padding: theme.spacing(1),
        textAlign: 'center',
    },
    dataView: {
        marginTop: "5%",
        color: 'black',
        [theme.breakpoints.down('sm')]: {
            fontSize: '2.5rem',
            fontWeight: '300',
            lineHeight: '1.2',
            letterSpacing: '-0.00833em',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '2.75rem',
            fontWeight: '300',
            lineHeight: '1.2',
            letterSpacing: '-0.00833em',
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: '3.75rem',
            fontWeight: '300',
            lineHeight: '1.2',
            letterSpacing: '-0.00833em',  
        },
    },
    dataAdd: {
        color: 'black',
        [theme.breakpoints.down('sm')]: {
            fontSize: '2.5rem',
            fontWeight: '300',
            lineHeight: '1.2',
            letterSpacing: '-0.00833em',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '2.75rem',
            fontWeight: '300',
            lineHeight: '1.2',
            letterSpacing: '-0.00833em',
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: '3.75rem',
            fontWeight: '300',
            lineHeight: '1.2',
            letterSpacing: '-0.00833em',  
        },
    }
}));

const nightStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        backgroundColor: 'grey',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1,
        },
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(1),
    },
    button: {
        alignItems: 'center',
        padding: theme.spacing(1),
        textAlign: 'center',
    },
    dataView: {
        marginTop: "5%",
        color: 'white',
        [theme.breakpoints.down('sm')]: {
            fontSize: '2.5rem',
            fontWeight: '300',
            lineHeight: '1.2',
            letterSpacing: '-0.00833em',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '2.75rem',
            fontWeight: '300',
            lineHeight: '1.2',
            letterSpacing: '-0.00833em',
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: '3.75rem',
            fontWeight: '300',
            lineHeight: '1.2',
            letterSpacing: '-0.00833em',  
        },
    },
    dataAdd: {
        color: "white",
        [theme.breakpoints.down('sm')]: {
            fontSize: '2.5rem',
            fontWeight: '300',
            lineHeight: '1.2',
            letterSpacing: '-0.00833em',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '2.75rem',
            fontWeight: '300',
            lineHeight: '1.2',
            letterSpacing: '-0.00833em',
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: '3.75rem',
            fontWeight: '300',
            lineHeight: '1.2',
            letterSpacing: '-0.00833em',  
        },
    },
}));

export default function MiniDrawer(props) {
    let classes;
    const now = moment().format('H');
    (now <= 6 || now >= 20 )? classes = nightStyles(): classes = dayStyles()
    const theme = useTheme();
    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const [toggleData, setToggleData] = useState(true);
    const [toggleAdd, setToggleAdd] = useState(true);
    const [toggleTimer, setToggleTimer] = useState(false);
    const [redirect, setRedirect] = useState(false);
    const [target, setTarget] = useState(null);

    function toggle(type) {
        if (type === 'add') {
            setToggleAdd(!toggleAdd);
        } else if (type === 'view') {
            setToggleData(!toggleData);
        } else if (type === 'timer') {
            setToggleTimer(!toggleTimer);
        }
    }

    function logout() {
        setRedirect(true);
        setTarget('/logout');
    }

    if (redirect) {
        return <Redirect to={{ pathname: target }} />
    } else {
        return (
            <div className={classes.root}>
                <CssBaseline />
                <AppBar
                    position="fixed"
                    className={clsx(classes.appBar, {
                        [classes.appBarShift]: open,
                    })}
                >
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            className={clsx(classes.menuButton, {
                                [classes.hide]: open,
                            })}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" noWrap>
                            Dezzy Data App
                     </Typography>
                    </Toolbar>
                </AppBar>
                <Drawer
                    variant="permanent"
                    className={clsx(classes.drawer, {
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    })}
                    classes={{
                        paper: clsx({
                            [classes.drawerOpen]: open,
                            [classes.drawerClose]: !open,
                        }),
                    }}
                >
                    <div className={classes.toolbar}>
                        <IconButton onClick={handleDrawerClose}>
                            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                        </IconButton>
                    </div>
                    <Divider />
                    <List>
                        <ListItem button key='addData' onClick={() => toggle('add')}>
                            <ListItemIcon><AddIcon /></ListItemIcon>
                            <ListItemText primary='Add Data' />
                        </ListItem>
                        <ListItem button key='ViewData' onClick={() => toggle('view')}>
                            <ListItemIcon><VisibilityIcon /></ListItemIcon>
                            <ListItemText primary='View Data' />
                        </ListItem>
                        <ListItem button key='viewTimer' onClick={() => toggle('timer')}>
                            <ListItemIcon><AccessTimeIcon /></ListItemIcon>
                            <ListItemText primary='View Timer' />
                        </ListItem>
                        <ListItem button key='downloadData'>
                            <ListItemIcon><DownloadButton {...props} data={props.data} movementData={props.movementData} /></ListItemIcon>
                            <ListItemText primary='Download Data' />
                        </ListItem>
                        <Divider/>
                        <ListItem button key='logout' onClick={() => logout()}>
                            <ListItemIcon><LockIcon /></ListItemIcon>
                            <ListItemText primary='Log Out' />
                        </ListItem>
                    </List>
                </Drawer>
                <main className={classes.content}>
                    <div className={classes.toolbar} />
                    <Grid container>
                        {toggleAdd && !toggleTimer ?
                            <>
                                <Grid item xs={12}><Typography className={classes.dataAdd}>Record Data:</Typography></Grid>
                                <Grid item xs={12} sm={4} md={4} className={classes.button}><AddDataButton collection='movementData' sleep='false' buttonType='movement' {...props} /></Grid>
                                <Grid item xs={12} sm={4} md={4} className={classes.button}><AddDataButton collection='sleepData' sleep='true' buttonType='sleep' {...props} /></Grid>
                                <Grid item xs={12} sm={4} md={4} className={classes.button}><AddDataButton collection='sleepData' sleep='false' buttonType='wake' {...props} /></Grid>
                            </>
                            : null}
                        {toggleData && !toggleTimer ?
                            <>
                                <Grid item xs={12}><Typography className={classes.dataView}>View Data:</Typography></Grid>
                                <Grid item xs={12} sm={12} md={6} lg={6}><SleepWakeGraph {...props} sleepData={props.sleepData} /></Grid>
                                <Grid item xs={12} sm={12} md={6} lg={6}><SleepGraph {...props} sleepData={props.sleepData} wakeData={props.wakeData} /></Grid>
                                <Grid item xs={12} sm={12} md={6} lg={6}><DisplayBurden {...props} data={props.data} /></Grid>
                                <Grid item xs={12} sm={12} md={6} lg={6}><MovementGraph {...props} movementData={props.movementData} /></Grid>
                                <Grid item xs={12} sm={12} md={12} lg={12}><MovementListing {...props} movementData={props.movementData} /></Grid>
                            </>
                            : null}
                        {toggleTimer ?
                            <>
                                <Grid item xs={12}><Typography className={classes.dataAdd}>View Timer:</Typography></Grid>
                                <Grid item lg={1}></Grid>
                                <Grid item xs={12} sm={12} md={10} lg={10}><SimpleTimer {...props} /></Grid>
                                <Grid item lg={1}></Grid>
                                <Grid item lg={1}></Grid>
                                <Grid item xs={12} sm={12} md={10} lg={10}><ContractionLog {...props} /></Grid>
                                <Grid item lg={1}></Grid>
                            </>  
                            : null  
                         }
                    </Grid>
                </main>
            </div>
        );
    }
}


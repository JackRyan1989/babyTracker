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
import WorkIcon from '@material-ui/icons/Work';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import LocalHotelIcon from '@material-ui/icons/LocalHotel';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Grid from '@material-ui/core/Grid';
import MoveContainer from '../containers/movementContainer';
import SleepContainer from '../containers/sleepContainer';
import EatContainer from '../containers/eatContainer';
import DiaperContainer from '../containers/diaperContainer';
import BloodPressureContainer from '../containers/bloodPressureContainer';
import EffortContainer from '../containers/effortContainer';
import DownloadButton from '../components/downloadButton';
import SimpleTimer from '../components/timer';
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
    },
    inUse: {
        color: '#FF7657',
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
    inUse: {
        color: '#FF7657',
    }
}));

export default function MiniDrawer(props) {
    const app = props.app;
    let classes;
    const now = moment().format('H');
    (now <= 6 || now >= 20) ? classes = nightStyles() : classes = dayStyles()
    const theme = useTheme();
    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const [toggleSleep, setToggleSleep] = useState(false);
    const [toggleMove, setToggleMove] = useState(true);
    const [toggleTimer, setToggleTimer] = useState(false);
    const [togglePoop, setTogglePoop] = useState(false);
    const [toggleEat, setToggleEat] = useState(false);
    const [toggleBP, setToggleBP] = useState(false);
    const [toggleEffort, setToggleEffort] = useState(false);
    const [redirect, setRedirect] = useState(false);
    const [target, setTarget] = useState(null);

    function toggle(type) {
        switch (type) {
            case 'move':
                setToggleMove(true);
                setToggleSleep(false);
                setToggleTimer(false);
                setToggleEat(false);
                setTogglePoop(false);
                setToggleBP(false);
                setToggleEffort(false);
                break;
            case 'sleep':
                setToggleMove(false);
                setToggleSleep(true);
                setToggleTimer(false);
                setToggleEat(false);
                setTogglePoop(false);
                setToggleBP(false);
                setToggleEffort(false);
                break;
            case 'timer':
                setToggleMove(false);
                setToggleSleep(false);
                setToggleTimer(true);
                setToggleEat(false);
                setTogglePoop(false);
                setToggleBP(false);
                setToggleEffort(false);
                break;
            case 'eat':
                setToggleMove(false);
                setToggleSleep(false);
                setToggleTimer(false);
                setToggleEat(true);
                setTogglePoop(false);
                setToggleBP(false);
                setToggleEffort(false);
                break;
            case 'poop':
                setToggleMove(false);
                setToggleSleep(false);
                setToggleTimer(false);
                setToggleEat(false);
                setTogglePoop(true);
                setToggleBP(false);
                setToggleEffort(false);
                break;
            case 'bp':
                setToggleMove(false);
                setToggleSleep(false);
                setToggleTimer(false);
                setToggleEat(false);
                setTogglePoop(false);
                setToggleBP(true);
                setToggleEffort(false);
                break;
            case 'effort':
                setToggleMove(false);
                setToggleSleep(false);
                setToggleTimer(false);
                setToggleEat(false);
                setTogglePoop(false);
                setToggleBP(false);
                setToggleEffort(true);
                break;
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
                        <ListItem button key='addData' onClick={() => toggle('move')}>
                            <ListItemIcon>{toggleMove ? <DirectionsRunIcon className={classes.inUse} /> : <DirectionsRunIcon />}</ListItemIcon>
                            <ListItemText primary='Movement' />
                        </ListItem>
                        <ListItem button key='viewBP' onClick={() => toggle('bp')}>
                            <ListItemIcon>{toggleBP ? <FavoriteBorderIcon className={classes.inUse} /> : <FavoriteBorderIcon />}</ListItemIcon>
                            <ListItemText primary='Blood Pressure' />
                        </ListItem>
                        <ListItem button key='viewTimer' onClick={() => toggle('timer')}>
                            <ListItemIcon>{toggleTimer ? <AccessTimeIcon className={classes.inUse} /> : <AccessTimeIcon />}</ListItemIcon>
                            <ListItemText primary='Contractions' />
                        </ListItem>
                        <ListItem button key='ViewData' onClick={() => toggle('sleep')}>
                            <ListItemIcon>{toggleSleep ? <LocalHotelIcon className={classes.inUse} /> : <LocalHotelIcon />}</ListItemIcon>
                            <ListItemText primary='Sleep' />
                        </ListItem>
                        <ListItem button key='viewEat' onClick={() => toggle('eat')}>
                            <ListItemIcon>{toggleEat ? <FastfoodIcon className={classes.inUse} /> : <FastfoodIcon />}</ListItemIcon>
                            <ListItemText primary='Breastfeeding' />
                        </ListItem>
                        <ListItem button key='viewPoop' onClick={() => toggle('poop')}>
                            <ListItemIcon>{togglePoop ? <div className={classes.inUse}>&#128169;</div> : <div>&#128169;</div>}</ListItemIcon>
                            <ListItemText primary='Peepee Poopoo' />
                        </ListItem>
                        <ListItem button key='viewEffort' onClick={() => toggle('effort')}>
                            <ListItemIcon>{toggleEffort ? <WorkIcon className={classes.inUse} /> : <WorkIcon />} </ListItemIcon>
                            <ListItemText primary='Effort' />
                        </ListItem>
                        <ListItem button key='downloadData'>
                            <ListItemIcon><DownloadButton {...props} /></ListItemIcon>
                            <ListItemText primary='Download Data' />
                        </ListItem>
                        <Divider />
                        <ListItem button key='logout' onClick={() => logout()}>
                            <ListItemIcon><LockIcon /></ListItemIcon>
                            <ListItemText primary='Log Out' />
                        </ListItem>
                    </List>
                </Drawer>
                <main className={classes.content}>
                    <div className={classes.toolbar} />
                    <Grid container>
                        {toggleMove ?
                            <>
                                <Grid item xs={12}><Typography className={classes.dataAdd}>Movement:</Typography></Grid>
                                <Grid item xs={12}><MoveContainer {...props} app={app} /></Grid>
                            </>
                            : null}
                        {toggleSleep ?
                            <>
                                <Grid item xs={12}><Typography className={classes.dataAdd}>Sleep:</Typography></Grid>
                                <Grid item xs={12}><SleepContainer {...props} app={app} /></Grid>
                            </>
                            : null}
                        {toggleTimer ?
                            <>
                                <Grid item xs={12}><Typography className={classes.dataAdd}>Contractions:</Typography></Grid>
                                <Grid item lg={1}></Grid>
                                <Grid item xs={12} sm={12} md={10} lg={10}><SimpleTimer {...props} /></Grid>
                                <Grid item lg={1}></Grid>
                            </>
                            : null
                        }
                        {toggleEat ?
                            <>
                                <Grid item xs={12}><Typography className={classes.dataAdd}>Breastfeeding:</Typography></Grid>
                                <Grid item xs={12}><EatContainer {...props} app={app} /></Grid>
                            </>
                            : null}
                        {togglePoop ?
                            <>
                                <Grid item xs={12}><Typography className={classes.dataAdd}>Diaper Change:</Typography></Grid>
                                <Grid item xs={12}><DiaperContainer {...props} app={app} /></Grid>
                            </>
                            : null}
                        {toggleBP ?
                            <>
                                <Grid item xs={12}><Typography className={classes.dataAdd}>Ash's Blood Pressure:</Typography></Grid>
                                <Grid item xs={12}><BloodPressureContainer {...props} app={app} /></Grid>
                            </>
                            : null}
                        {toggleEffort ?
                            <>
                                <Grid item xs={12}><Typography className={classes.dataAdd}>Effort:</Typography></Grid>
                                <Grid item xs={12}><EffortContainer {...props} app={app} /></Grid>
                            </>
                            : null
                        }
                    </Grid>
                </main>
            </div>
        );
    }
}


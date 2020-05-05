import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import HeaderHideScroll from '../components/headerHideScroll';
import DisplayBurden from '../components/displayBurden';
import SleepGraph from '../components/sleepGraph';
import SleepWakeGraph from '../components/sleepWakeGraph';
import Grid from '@material-ui/core/Grid';
import MovementGraph from '../components/movementGraph';
import MovementListing from '../components/movementList';

const useStyles = makeStyles(theme => ({
    graphTop: {
        marginTop: '5%',
        marginLeft: '3%',
        padding: theme.spacing(1),
        textAlign: 'center',
    },
    graphMiddle: {
        marginLeft: '3%',
        padding: theme.spacing(1),
        textAlign: 'center',
    },
    graphBottom: {
        marginLeft: '3%',
        padding: theme.spacing(1),
        textAlign: 'center',
    },
    list: {
        marginLeft: '3%',
        padding: theme.spacing(1),
        textAlign: 'center',
    }
})
);


export default function ViewData(props) {
    const classes = useStyles();
    return (
        <>
        <HeaderHideScroll {...props}></HeaderHideScroll>
        <Grid container spacing={2}>
            <Grid className={classes.graphTop} item xs={12} sm={12} md={6} lg={5}><SleepWakeGraph {...props}/></Grid>
            <Grid className={classes.graphTop} item xs={12} sm={12} md={6} lg={5}><MovementGraph {...props}/></Grid>
            <Grid item xs={12} sm={12} md={6} lg={1}></Grid>
            <Grid className={classes.graphMiddle} item xs={12} sm={12} md={6} lg={5}><DisplayBurden {...props}/></Grid>
            <Grid className={classes.graphBottom} item xs={12} sm={12} md={6} lg={5}><SleepGraph {...props}/></Grid>
            <Grid className={classes.list} item xs={12} sm={12} md={11} lg={11}><MovementListing {...props}/></Grid>
        </Grid>
        </>
    )
};
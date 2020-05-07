import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import HeaderHideScroll from '../components/headerHideScroll';
import DisplayBurden from '../components/displayBurden';
import SleepGraph from '../components/sleepGraph';
import SleepWakeGraph from '../components/sleepWakeGraph';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import MovementGraph from '../components/movementGraph';
import MovementListing from '../components/movementList';

const useStyles = makeStyles(theme => ({
    button: {
        marginTop: '7%',
        marginLeft: '3%',
        textAlign: 'center',
    },
    buttonTwo: {
        backgroundColor: 'lightgrey',
    },
    graphTop: {
        marginTop: '3%',
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
        margin: '2% 0 0 3.5%',
        padding: theme.spacing(1),
        textAlign: 'center',
    }
})
);


export default function ViewData(props) {
    const [toggleGraphs, setToggleGraphs] = useState(true);
    const [toggleList, setToggleList] = useState(true);

    function toggle(type) {
        {type === 'graph' ? setToggleGraphs(!toggleGraphs) : setToggleList(!toggleList)}
    }

    const classes = useStyles();
    return (
        <>
        <HeaderHideScroll {...props}></HeaderHideScroll>
        <Grid container spacing={2}>
            <Grid className={classes.button} item xs={5} sm={5} md={5} lg={5}><Button className={classes.buttonTwo} onClick={() => toggle('graph')}>{toggleGraphs ? 'Hide Graphs': 'Show Graphs'}</Button></Grid>
            <Grid className={classes.button} item xs={5} sm={5} md={5} lg={5}><Button className={classes.buttonTwo} onClick={() => toggle('list')}>{toggleList ? 'Hide List': 'Show List'}</Button></Grid>
            {toggleGraphs ? 
            <>
            <Grid className={classes.graphTop} item xs={12} sm={12} md={6} lg={5}><SleepWakeGraph {...props}/></Grid>
            <Grid className={classes.graphTop} item xs={12} sm={12} md={6} lg={5}><MovementGraph {...props}/></Grid>
            <Grid item xs={12} sm={12} md={6} lg={1}></Grid>
            <Grid className={classes.graphMiddle} item xs={12} sm={12} md={6} lg={5}><DisplayBurden {...props}/></Grid>
            <Grid className={classes.graphBottom} item xs={12} sm={12} md={6} lg={5}><SleepGraph {...props}/></Grid>
            </>
            : null }
            {toggleList ? 
            <Grid className={classes.list} item xs={12} sm={12} md={11} lg={10}><MovementListing {...props}/></Grid> : null }
        </Grid>
        </>
    )
};
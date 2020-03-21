import React from 'react';
import HeaderHideScroll from '../components/headerHideScroll';
import DisplayBurden from '../components/displayBurden';
import SleepGraph from '../components/sleepGraph';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    paper: {
        margin: '15% 5% 5% 5%',
        backgroundColor: '#eceff1',
        padding: '5px',
        border: 'none',
        borderRadius: '2px',
    },
})
);

export default function ViewData(props) {
    const classes = useStyles();
    return (
        <>
        <HeaderHideScroll {...props}></HeaderHideScroll>
        <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={6} lg={6}><DisplayBurden/></Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}><Paper elevation={3} className={classes.paper}></Paper></Grid>
        </Grid>
        <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={12} lg={12}><SleepGraph {...props}/></Grid>
        </Grid>
        </>
    )
};
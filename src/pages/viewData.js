import React from 'react';
import HeaderHideScroll from '../components/headerHideScroll';
import DisplayBurden from '../components/displayBurden';
import SleepGraph from '../components/sleepGraph';
import SleepWakeGraph from '../components/sleepWakeGraph';
import Grid from '@material-ui/core/Grid';

export default function ViewData(props) {
    return (
        <>
        <HeaderHideScroll {...props}></HeaderHideScroll>
        <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={12} lg={12}><DisplayBurden {...props}/></Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}><SleepGraph {...props}/></Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}><SleepWakeGraph {...props}/></Grid>
        </Grid>
        </>
    )
};
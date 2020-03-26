import React from 'react';
import HeaderHideScroll from '../components/headerHideScroll';
import DisplayBurden from '../components/displayBurden';
import SleepGraph from '../components/sleepGraph';
import Grid from '@material-ui/core/Grid';
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
    return (
        <>
        <HeaderHideScroll {...props}></HeaderHideScroll>
        <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={6} lg={6}><DisplayBurden {...props}/></Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}><SleepGraph {...props}/></Grid>
        </Grid>
        </>
    )
};
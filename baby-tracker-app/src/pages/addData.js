import React from 'react';
import { Grid } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
import HeaderHideScroll from '../components/headerHideScroll';
import SleepButton from '../components/sleepButton';
import WakeButton from '../components/wakeButton';

const useStyles = makeStyles(theme => ({
    button: {
        marginTop: '15%',
        padding: theme.spacing(1),
        textAlign: 'center',
    },
})
);

function AddData(props) {
    console.log(props);
    const classes = useStyles();
    return (
        <>
            <HeaderHideScroll></HeaderHideScroll>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={2} md={3}></Grid>
                <Grid item xs={12} sm={4} md={3} className={classes.button}><SleepButton /></Grid>
                <Grid item xs={12} sm={4} md={3} className={classes.button}><WakeButton /></Grid>
                <Grid item xs={12} sm={2} md={3}></Grid>
            </Grid>
        </>
    )

};

export default AddData;
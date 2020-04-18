import React from 'react';
import { Grid } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
import HeaderHideScroll from '../components/headerHideScroll';
import SleepButton from '../components/sleepButton';
import WakeButton from '../components/wakeButton';
import MovementButton from '../components/movementButton';

const useStyles = makeStyles(theme => ({
    button: {
        marginTop: '15%',
        marginLeft: '3%',
        padding: theme.spacing(1),
        textAlign: 'center',
    },
})
);

function AddData(props) {
    const classes = useStyles();
    return (
        <>
            <HeaderHideScroll {...props} thePage={'addData'}></HeaderHideScroll>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={4} md={3} className={classes.button}><SleepButton {...props} /></Grid>
                <Grid item xs={12} sm={4} md={3} className={classes.button}><WakeButton {...props} /></Grid>
                <Grid item xs={12} sm={4} md={3} className={classes.button}><MovementButton {...props} /></Grid>
            </Grid>
        </>
    )

};

export default AddData;
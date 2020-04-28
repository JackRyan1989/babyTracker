import React from 'react';
import { Grid } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
import HeaderHideScroll from '../components/headerHideScroll';
import AddDataButton from '../components/button';

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
            <HeaderHideScroll {...props}></HeaderHideScroll>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={4} md={1}></Grid>
                <Grid item xs={12} sm={4} md={2} className={classes.button}><AddDataButton collection='movementData' sleep='false' buttonType='movement' {...props} /></Grid> 
                <Grid item xs={12} sm={4} md={1}></Grid>
                <Grid item xs={12} sm={4} md={2} className={classes.button}><AddDataButton collection='sleepData' sleep='true' buttonType='sleep' {...props} /></Grid>
                <Grid item xs={12} sm={4} md={1}></Grid>
                <Grid item xs={12} sm={4} md={2} className={classes.button}><AddDataButton collection='sleepData' sleep='false' buttonType='wake' {...props} /></Grid>
            </Grid>
        </>
    )

};

export default AddData;
import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    container: {
        margin: '15% 5% 5% 5%',
        padding: theme.spacing(2),
        backgroundColor: '#eceff1',
        padding: '5px',
        border: 'none',
        borderRadius: '2px',
    },
    flex: {
        flexGrow: 1,
        paddingTop: '.4rem',
        margin: '.4rem',
    },
    heading: {
        fontSize: '2rem',
        textAlign: 'center',
        color: '#1a237e',
        margin: '2% 0 2% 0',
    },
    name: {
        backgroundColor: 'whitesmoke',
        margin: '1px',
        color: '#1a237e',
        borderStyle: 'solid',
        borderColor: '#78909c',
        borderWidth: '1px',
    }
})
);

export default function DisplayBurden(props) {
    const classes = useStyles();
return (
    <>
        <div className={classes.container}>
            <Typography className={classes.heading}>Effort</Typography>
            <Grid className={classes.flex} container spacing={3}>
                <Grid className={classes.name} item xs={3} sm={3} md={3} lg={3}><Typography>Ash</Typography></Grid>
                <Grid className={classes.name} item xs={8} sm={8} md={8} lg={8}><Typography>%</Typography></Grid>
            </Grid>
            <Grid className={classes.flex} container spacing={3}>
                <Grid className={classes.name} item xs={3} sm={3} md={3} lg={3}><Typography>Jack</Typography></Grid>
                <Grid className={classes.name} item xs={8} sm={8} md={8} lg={8}><Typography>%</Typography></Grid>
            </Grid>
        </div>
    </>
)

}
import React from 'react';
import { Grid } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
import HeaderHideScroll from '../components/headerHideScroll';
import DownloadButton from '../components/downloadButton';

const useStyles = makeStyles(theme => ({
    main: {
        marginTop: '15%',
        marginLeft: '3%',
        padding: theme.spacing(1),
        textAlign: 'center',
    },
})
);

export default function Download(props) {
    const classes = useStyles();
    return (
        <>
            <HeaderHideScroll {...props} thePage={'getData'}></HeaderHideScroll>
            <Grid className={classes.main} container spacing={2}>
                <Grid item item xs={12} sm={12} md={12} lg={12}><DownloadButton {...props} /></Grid>
            </Grid>
        </>
    )
};
import React, { useEffect, useState } from 'react';
import { RemoteMongoClient } from "mongodb-stitch-browser-sdk";
import { makeStyles } from '@material-ui/core/styles';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import MovementGraph from '../components/movementGraph';
import MovementListing from '../components/movementList';
import DataAddedDialog from '../components/dataAddedDialog';
import { Button, Grid, Typography } from '@material-ui/core/';
import moment from 'moment';

const dayStyles = makeStyles(theme => ({
    move: {
        color: '#EE6363',
        fontSize: '8rem',
        [theme.breakpoints.down('sm')]: {
            border: 'solid lightgrey 1px',
            borderRadius: '5px',
        },
    },
    text: {
        width: '75%',
        color: 'black',
        fontWeight: '300',
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '2rem',
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: '2rem',
        },
    },
})
);

const nightStyles = makeStyles(theme => ({
    move: {
        color: '#EE6363',
        backgroundColor: 'grey',
        fontSize: '8rem',
        [theme.breakpoints.down('sm')]: {
            border: 'solid lightgrey 1px',
            borderRadius: '5px',
        },

    },
    text: {
        fontWeight: '300',
        textAlign: 'center',
        color: 'white',
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '2rem',
            width: '75%',
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: '2rem',
            width: '100%',
        },
    },
})
);

export default function MoveContainer(props) {
    let classes;
    const now = moment().format('H');
    (now <= 6 || now >= 20) ? classes = nightStyles() : classes = dayStyles();
    const [dispDialog, setDialog] = useState(false);
    const [movementData, setMove] = useState(undefined);
    const [dataAdded, setDataAdded] = useState(true);
    const app = props.app;

    useEffect(() => {
        if (dataAdded === true) {
            const options = { 'sort': { "current_date": -1 }, };
            const mongodb = app.getServiceClient(RemoteMongoClient.factory, "mongodb-atlas");
            const moveCollection = mongodb.db("baldyData").collection("movementData");
            moveCollection.find({}, options).toArray()
                .then((data) => {
                    setMove(data);
                })
                .catch((err) => err);
            setDataAdded(false);
        }
    }, [app, dataAdded]);

    const handleClose = () => {
        setDialog(false);
    };
    const timeStamp = () => {
        const mongodb = props.location.mongodbClient;
        const data = mongodb.db("baldyData").collection('movementData');
        const userID = props.location.user;
        const now = {
            month: moment().format('MMMM'),
            date: moment().format('dddd Do'),
            year: moment().format('YYYY'),
            time: moment().format('h:mm:ss a'),
        };
        data.insertOne({
            sleep: 'false',
            timeStamp: now,
            user: userID
        }).catch(console.error);
        setDialog(true);
        setDataAdded(true);
        setMove(undefined);
    };

    return (
        <Grid container>
            <Grid item xs={3}></Grid>
            <Grid item xs={6} >
                <Button
                    onClick={() => timeStamp()}
                ><DirectionsRunIcon className={classes.move} />
                </Button>
                <Typography className={classes.text}>Movement</Typography>
                <DataAddedDialog openDialog={dispDialog} handleClose={() => handleClose()} />
            </Grid>
            <Grid item xs={3}></Grid>
            {movementData ?
                <>
                    <Grid item xs={12} sm={12} md={6} lg={6}><MovementGraph movementData={movementData} app={app} /></Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}><MovementListing movementData={movementData} app={app} /></Grid>
                </>
                :
                <>
                    <Grid item xs={12} sm={12} md={6} lg={6}><Typography>Loading...</Typography></Grid>
                </>}
        </Grid>
    )
}
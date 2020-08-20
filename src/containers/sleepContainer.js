import React, { useEffect, useState } from 'react';
import { RemoteMongoClient } from "mongodb-stitch-browser-sdk";
import SleepGraph from '../components/sleepGraph';
import SleepWakeGraph from '../components/sleepWakeGraph';
import { Button, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import NightsStayIcon from '@material-ui/icons/NightsStay';
import AlarmAddRoundedIcon from '@material-ui/icons/AlarmAddRounded';
import DataAddedDialog from '../components/dataAddedDialog';
import moment from 'moment';

const dayStyles = makeStyles(theme => ({
    sleep: {
        color: '#7164f9',
        fontSize: '8rem',
        [theme.breakpoints.down('sm')]: {
            border: 'solid lightgrey 1px',
            borderRadius: '5px',
        },
    },
    wake: {
        color: '#b23f3f',
        fontSize: '8rem',
        [theme.breakpoints.down('sm')]: {
            border: 'solid lightgrey 1px',
            borderRadius: '5px',
        },
    },
    text: {
        width: '75%',
        textAlign: 'center',
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
    sleep: {
        right: '260px',
        color: '#7164f9',
        backgroundColor: 'grey',
        fontSize: '8rem',
        [theme.breakpoints.down('sm')]: {
            border: 'solid lightgrey 1px',
            borderRadius: '5px',
        },
    },
    wake: {
        right: '260px',
        color: '#b23f3f',
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

export default function SleepContainer(props) {
    let classes;
    const now = moment().format('H');
    (now <= 6 || now >= 20) ? classes = nightStyles() : classes = dayStyles();
    const [sleepData, setSleep] = useState(undefined);
    const [wakeData, setWake] = useState(undefined);
    const [allData, setData] = useState(undefined);
    const [dispDialog, setDialog] = useState(false);
    const [dataAdded, setDataAdded] = useState(true);
    const [asleepAlert, setAsleepAlert] = useState(false);
    const app = props.app;

    useEffect(() => {
        if (dataAdded === true) {
            const options = { 'sort': { "current_date": -1 }, };
            const wakeQuery = { "sleep": 'false' };
            const sleepQuery = { "sleep": 'true' };
            const mongodb = app.getServiceClient(RemoteMongoClient.factory, "mongodb-atlas");
            const sleepCollection = mongodb.db("baldyData").collection("sleepData");
            sleepCollection.find({}, options).toArray()
                .then((data)=>{
                    setData(data);
                })
            sleepCollection.find(sleepQuery, options).toArray()
                .then((data) => {
                    setSleep(data);
                })
                .catch((err) => err);
            sleepCollection.find(wakeQuery, options).toArray()
                .then((data) => {
                    setWake(data);
                })
                .catch((err) => err);
            setDataAdded(false);
        }
    }, [app, dataAdded]);

    const handleClose = () => {
        setDialog(false);
    };

    const timeStamp = (sleep) => {
        let lastItem = allData.pop();
        const mongodb = props.location.mongodbClient;
        const data = mongodb.db("baldyData").collection('sleepData');
        const userID = props.location.user;
        const now = {
            month: moment().format('MMMM'),
            date: moment().format('dddd Do'),
            year: moment().format('YYYY'),
            time: moment().format('h:mm:ss a'),
        };
        if ((sleep === 'true' && lastItem === undefined) || (sleep === 'false') || (sleep === 'true' && lastItem.sleep === 'false')) {
            data.insertOne({
                sleep: sleep,
                timeStamp: now,
                user: userID
            }).catch(console.error);
            setDialog(true);
            setDataAdded(true);
            setSleep(undefined);
            setWake(undefined);
            setAsleepAlert(false);
        } else if (sleep === 'true' && lastItem.sleep === 'true') {
            setAsleepAlert(true);
            setDialog(true);
        };
    };



    return (
        <Grid container>
            <Grid item xs={6}>
                <Button
                    onClick={() => timeStamp('true')}
                ><NightsStayIcon className={classes.sleep} />
                </Button>
                <Typography className={classes.text}>{props.buttonType}</Typography>
                <DataAddedDialog openDialog={dispDialog} handleClose={() => handleClose()} dataType={props.buttonType} asleepAlert={asleepAlert} />
            </Grid>
            <Grid item xs={6}>
                <Button
                    onClick={() => timeStamp('false')}
                ><AlarmAddRoundedIcon className={classes.wake} />
                </Button>
                <Typography className={classes.text}>{props.buttonType}</Typography>
                <DataAddedDialog openDialog={dispDialog} handleClose={() => handleClose()} asleepAlert={asleepAlert}/>
            </Grid>
            {(sleepData && wakeData) ?
                <>
                    <Grid item xs={12}><SleepWakeGraph sleepData={sleepData} app={app} /></Grid>
                    <Grid item xs={12}><SleepGraph sleepData={sleepData} wakeData={wakeData} data={allData} app={app} /></Grid>
                </>
                :
                <>
                    <Grid item xs={12} sm={12} md={6} lg={6}><Typography>Loading...</Typography></Grid>
                </>}
        </Grid>
    )
};
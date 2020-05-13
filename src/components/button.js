import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import NightsStayIcon from '@material-ui/icons/NightsStay';
import AlarmAddRoundedIcon from '@material-ui/icons/AlarmAddRounded';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import { Button, Typography } from '@material-ui/core/';
import DataAddedDialog from './dataAddedDialog';
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


export default function AddDataButton(props) {
    let classes;
    const now = moment().format('H');
    (now <= 6 || now >= 20 )? classes = nightStyles(): classes = dayStyles();
    const [dispDialog, setDialog] = useState(false);
    const handleClose = () => {
        setDialog(false);
      };
    const timeStamp = () => {
        const mongodb = props.location.mongodbClient;
        const data = mongodb.db("baldyData").collection(props.collection);
        const userID = props.location.user;
        const now = {
            month: moment().format('MMMM'),
            date: moment().format('dddd Do'),
            year: moment().format('YYYY'),
            time: moment().format('h:mm:ss a'),
        };
        setDialog(true);
        data.insertOne({
            sleep: props.sleep,
            timeStamp: now,
            user: userID
        }).catch(console.error);
    };

    return (
        <div>
            <Button
                onClick = {timeStamp}
            >{props.buttonType === 'sleep' ? <NightsStayIcon className={classes.sleep} /> : props.buttonType === 'wake' ? <AlarmAddRoundedIcon className={classes.wake} /> : props.buttonType === 'movement' ? <DirectionsRunIcon className={classes.move} /> : null }
            </Button>
            <Typography className={classes.text}>{props.buttonType}</Typography>
            <DataAddedDialog openDialog={dispDialog} handleClose={handleClose} dataType={props.buttonType} />
        </div>
    )
}
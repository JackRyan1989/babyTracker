import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import NightsStayIcon from '@material-ui/icons/NightsStay';
import AlarmAddRoundedIcon from '@material-ui/icons/AlarmAddRounded';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import { Button, Typography } from '@material-ui/core/';
import DataAddedDialog from './dataAddedDialog';
import moment from 'moment';

const useStyles = makeStyles(theme => ({
    sleep: {
        fontSize: '8rem',
        color: '#7164f9',
    },
    wake: {
        fontSize: '8rem',
        color: '#b23f3f',
    },
    move: {
        fontSize: '8rem',
        color: '#EE6363',
    },
    text: {
        fontSize: '2rem',
        borderBottomStyle: 'solid',
        borderBottomColor: 'grey',
        borderBottom: '1px',
        width: '75%',
        marginLeft: '14.5%',
    },
})
);


export default function AddDataButton(props) {
    const classes = useStyles();
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
        <>
            <Button
                onClick = {timeStamp}
            >{props.buttonType === 'sleep' ? <NightsStayIcon className={classes.sleep} /> : props.buttonType === 'wake' ? <AlarmAddRoundedIcon className={classes.wake} /> : props.buttonType === 'movement' ? <DirectionsRunIcon className={classes.move} /> : null }
            </Button>
            <Typography className={classes.text}>{props.buttonType}</Typography>
            <DataAddedDialog openDialog={dispDialog} handleClose={handleClose} dataType={props.buttonType} />
        </>
    )
}
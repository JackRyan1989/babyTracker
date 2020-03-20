import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AlarmAddRoundedIcon from '@material-ui/icons/AlarmAddRounded';
import DataAddedDialog from './dataAddedDialog';
import { Button, Typography } from '@material-ui/core/';
import moment from 'moment';

const useStyles = makeStyles(theme => ({
    icon: {
        fontSize: '8rem',
        color: '#b23f3f',
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

export default function WakeButton(props) {
    const classes = useStyles();
    const [dispDialog, setDialog] = useState(false);
    const handleClose = () => {
        setDialog(false);
      };
    const wakeTimeStamp = () => {
        const mongodb = props.location.mongodbClient;
        const sleepData = mongodb.db("baldyData").collection("sleepData");
        const userID = props.location.user;
        const now = moment().format('MMMM Do YYYY, h:mm:ss a');
        setDialog(true);
        sleepData.insertOne({
            sleep: false,
            timeStamp: now,
            user: userID
        }).catch(console.error);
    };
    return (
        <>
            <Button
                onClick={wakeTimeStamp}
            ><AlarmAddRoundedIcon className={classes.icon} /></Button>
            <Typography className={classes.text}>Wake</Typography>
            <DataAddedDialog openDialog={dispDialog} handleClose={handleClose} dataType={'wake'} />
        </>
    )

}
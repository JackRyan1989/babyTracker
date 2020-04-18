import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import DataAddedDialog from './dataAddedDialog';
import { Button, Typography } from '@material-ui/core/';
import moment from 'moment';

const useStyles = makeStyles(theme => ({
    icon: {
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

export default function MovementButton(props) {
    const classes = useStyles();
    const [dispDialog, setDialog] = useState(false);
    const handleClose = () => {
        setDialog(false);
      };
    const moveTimeStamp = () => {
        const mongodb = props.location.mongodbClient;
        const moveData = mongodb.db("baldyData").collection("movementData");
        const userID = props.location.user;
        const now = {
            month: moment().format('MMMM'),
            date: moment().format('dddd Do'),
            year: moment().format('YYYY'),
            time: moment().format('h:mm:ss a'),
        };
        setDialog(true);
        moveData.insertOne({
            timeStamp: now,
            user: userID
        }).catch(console.error);
    };
    return (
        <>
            <Button
                onClick={moveTimeStamp}
            ><DirectionsRunIcon className={classes.icon} /></Button>
            <Typography className={classes.text}>Movement</Typography>
            <DataAddedDialog openDialog={dispDialog} handleClose={handleClose} dataType={'movement'} />
        </>
    )

}
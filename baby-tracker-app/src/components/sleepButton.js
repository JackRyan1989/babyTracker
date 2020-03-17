import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import NightsStayIcon from '@material-ui/icons/NightsStay';
import { Button, Typography } from '@material-ui/core/';
import DataAddedDialog from './dataAddedDialog';

const useStyles = makeStyles(theme => ({
    icon: {
        fontSize: '8rem',
        color: '#7164f9',
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


export default function SleepButton(props) {
    const classes = useStyles();
    const [dispDialog, setDialog] = useState(false);
    const sleepTimeStamp = () => {
        const mongodb = props.location.mongodbClient;
        const sleepData = mongodb.db("baldyData").collection("sleepData");
        const userID = props.location.user;
        setDialog(true);
        sleepData.insertOne({
            sleep: true,
            current_date: new Date(),
            user: userID
        }).then(thing => {
            console.log('Thing')
        }).catch(console.error);
    };

    return (
        <>
            <Button
                onClick = {sleepTimeStamp}
            ><NightsStayIcon className={classes.icon} /></Button>
            <Typography className={classes.text}>Sleep</Typography>
            {dispDialog ? <DataAddedDialog openDialog={dispDialog} dataType={'sleep'} ></DataAddedDialog> : null}
        </>
    )
}
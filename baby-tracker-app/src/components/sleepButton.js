import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import NightsStayIcon from '@material-ui/icons/NightsStay';
import { Button, Typography } from '@material-ui/core/';

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
    console.log(props.location);
    const sleepTimeStamp = (props) => {
        console.log('Sleep time stamp clicked.');
    };
    return (
        <>
            <Button
                onClick = {sleepTimeStamp}
            ><NightsStayIcon className={classes.icon} /></Button>
            <Typography className={classes.text}>Sleep</Typography>
        </>
    )
}
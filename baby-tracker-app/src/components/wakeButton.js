import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AlarmAddRoundedIcon from '@material-ui/icons/AlarmAddRounded';
import { Button, Typography } from '@material-ui/core/';

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

export default function WakeButton() {
    const classes = useStyles();
    const wakeTimeStamp = () => {
        console.log('Wake time stamp clicked.');
    };
    return (
        <>
            <Button
                onClick={wakeTimeStamp}
            ><AlarmAddRoundedIcon className={classes.icon} /></Button>
            <Typography className={classes.text}>Wake</Typography>
        </>
    )

}
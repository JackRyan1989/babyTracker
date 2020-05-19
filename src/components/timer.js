import React, { useState } from "react";
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import moment from 'moment';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from "@material-ui/core";

const styles = makeStyles((theme) => ({
    timerContainer: {

    },
    mins: {

    },
    secs: {

    },
    centi: {

    },
    timeButton: {

    },

}))

export default function SimpleTimer(props){
    const [timerOn, setTimerOn] = useState(false);
    const [timerStart, setTimerStartTime] = useState(0);
    const [timerTime, setTimerTime] = useState(0);
    const [timeList, setTimeList] = useState([]);
    const [timerDurations, setDurations]= useState([]);
    let timer;
            
    function startTimer() {
        setTimerOn(true);
        setTimerStartTime(Date.now() - timerStart);
        setTimerTime(0);
        setTimeList([...timeList, moment().format('MM-DD-YYYY')]);
        console.log(timeList);
        timer = setInterval(() => {
            setTimerTime(Date.now() - timerStart);
        }, 10);
    };

    function stopTimer(mins, secs, centSecs) {
        setTimerOn(false);
        setDurations([...timerDurations, mins + ":" + secs + ":" + centSecs]);
        console.log(timerDurations);
        setTimerTime(0);
        setTimerStartTime(0);
        clearInterval(timer);
    };
    
    const classes = styles();
    let centiseconds = ("0" + (Math.floor(timerTime / 10) % 100)).slice(-2);
    let seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
    let minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);
    return (
        <Grid container className={classes.timerContainer}>
            <Grid item xs={2}></Grid>
            {timerOn ?
            <>
                <Grid item xs={1} className={classes.mins}>{minutes}</Grid>
                <Grid item xs={1} className={classes.secs}>:{seconds}</Grid>
                <Grid item xs={1} className={classes.centi}>:{centiseconds}</Grid>
                <Grid item xs={6} className={classes.timeButton}><Button onClick={() => stopTimer(minutes, seconds, centiseconds)}>Stop Timer</Button></Grid>
            </> 
            : 
            <>
                <Grid item xs={12}><Typography>Timer Ready</Typography></Grid>
                <Grid item xs={6} className={classes.timeButton}><Button onClick={() => startTimer()}>Start Timer</Button></Grid> 
                </>
                }
        </Grid>
    );
};

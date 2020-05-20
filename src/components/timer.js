import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import moment from 'moment';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from "@material-ui/core";
import { Paper } from "@material-ui/core";

const useStyles = theme => ({
    timerContainer: {
        backgroundColor: '#eceff1',
        padding: '5px',
        border: 'none',
        borderRadius: '2px',
        [theme.breakpoints.down('sm')]: {
            margin: '1%',
            padding: '2.5px',
        },
        [theme.breakpoints.up('md')]: {
            margin: '2.5% 1% 1% 1%',
            padding: '5px',
        },
        [theme.breakpoints.up('lg')]: {
            margin: '2.5% 1% 1% 1%',
            padding: '5px',
        },
    },
    TimerText: {
        fontSize: '1.75rem',
        margin: '2% 0 0% 0',
        textAlign: 'left',
        border: 'none',
        borderRadius: '2px',
        padding: '5%',
        backgroundColor: 'whitesmoke',
        textAlign: 'center',
        alignContent: 'center',
    },
    timeButtonInactive: {
        backgroundColor: 'lightblue',
        color: 'black',
        marginTop: '5%',
        marginBottom: '2.5%',
        textAlign: 'center',
        width: '100%',
    },
    timeButtonActive: {
        backgroundColor: 'pink',
        color: 'black',
        marginTop: '5%',
        marginBottom: '2.5%',
        textAlign: 'center',
        width: '100%',
    },

});

class SimpleTimer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            timerOn: false,
            timerStart: 0,
            timerTime: 0
        }
    };

    startTimer = () => {
        this.setState({
            timerOn: true,
            timerStart: Date.now() - this.state.timerStart,
            timerTime: this.state.timerTime,
        });
        this.timer = setInterval(() => {
            this.setState({
                timerTime: Date.now() - this.state.timerStart
            });
        }, 10);
    };

    stopTimer = (mins, secs, centSecs) => {
        this.setState({
            timerOn: false,
            timerTime: 0,
            timerStart: 0,
        });
        clearInterval(this.timer);
        const mongodb = this.props.location.mongodbClient;
        const data = mongodb.db("baldyData").collection("contractionData");
        const now = {
            month: moment().format('MMMM'),
            date: moment().format('dddd Do'),
            year: moment().format('YYYY'),
            time: moment().format('h:mm:ss a'),
        };
        data.insertOne({
            duration: mins + ":" + secs + ":" + centSecs,
            timeStamp: now,
        }).catch(console.error);
    };

    render() {
        const { classes } = this.props;
        let centiseconds = ("0" + (Math.floor(this.state.timerTime / 10) % 100)).slice(-2);
        let seconds = ("0" + (Math.floor(this.state.timerTime / 1000) % 60)).slice(-2);
        let minutes = ("0" + (Math.floor(this.state.timerTime / 60000) % 60)).slice(-2);
        return (
            <Paper elevation={3} className={classes.timerContainer}>
                <Grid container>
                    {this.state.timerOn ?
                        <>
                            <Grid item xs={3}></Grid>
                            <Grid item xs={6}>
                                <Typography className={classes.TimerText}>{minutes}:{seconds}:{centiseconds}</Typography>
                            </Grid>
                            <Grid item xs={3}></Grid>
                            <Grid item xs={3}></Grid>
                            <Grid item xs={6}>
                                <Button className={classes.timeButtonActive} onClick={() => this.stopTimer(minutes, seconds, centiseconds)}>Stop Timer</Button>
                            </Grid>
                        </>
                        :
                        <>
                            <Grid item xs={3}></Grid>
                            <Grid item xs={6}>
                                <Typography className={classes.TimerText}>00:00:00</Typography>
                            </Grid>
                            <Grid item xs={3}></Grid>
                            <Grid item xs={3}></Grid>
                            <Grid item xs={6}>
                                <Button className={classes.timeButtonInactive} onClick={() => this.startTimer()}>Start Timer</Button>
                            </Grid>
                        </>
                    }
                </Grid>
            </Paper>
        );
    }
};

export default withStyles(useStyles)(SimpleTimer);

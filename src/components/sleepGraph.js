import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import {Line} from 'react-chartjs-2';
import moment from 'moment';

const useStyles = makeStyles(theme => ({
    container: {
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
    heading: {
        fontWeight: '300',
        textAlign: 'center',
        color: '#1a237e',
        [theme.breakpoints.down('sm')]: {
            fontSize: '1.5rem',
            margin: '2% 0 0% 0',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '2rem',
            margin: '2% 0 0% 0',
        },
    },
}));

export default function SleepGraph(props) {
    const allData = props.data;
    const [complete, setComplete] = useState(false);
    const [data, setData] = useState(undefined);
    const app = props.app;
    
    function calculateDuration() {
        if (allData && ! complete){
            let hours = [];
            let days = [];
            let sleepData = [];
            let wakeData = [];
            let length;
            for (let i = 0; i < allData.length; i++) {
                if (allData[i].sleep === "true") {
                    sleepData.push(allData[i])
                } else {
                    wakeData.push(allData[i]);
                }
            };
            if (sleepData.length !== wakeData.length) {
                sleepData.length < wakeData.length ? length = sleepData.length : length = wakeData.length;
            } else {
                length = sleepData.length;
            }
            for (let i=0; i< length; i++){
                let day = `${sleepData[i].timeStamp.month}, ${sleepData[i].timeStamp.date}` 
                days.push(day)
                let startTime = sleepData[i].timeStamp.time;
                let endTime = wakeData[i].timeStamp.time;
                let dur = (moment
                    .duration(moment(endTime, 'h:mm:ss a')
                    .diff(moment(startTime, 'h:mm:ss a')))
                    .asHours());
                hours.push(dur);
            }
            const graphData = {
                labels: days,
                datasets: [
                    {
                    label: 'Sleep Duration',
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: 'rgba(75,192,192,0.4)',
                    borderColor: 'rgba(75,192,192,1)',
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: 'rgba(75,192,192,1)',
                    pointBackgroundColor: '#fff',
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                    pointHoverBorderColor: 'rgba(220,220,220,1)',
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: hours,
                    }
                ]
                };
                setData(graphData);
                setComplete(true);
        } else {
            return
        }
    };  

    useEffect(()=>{
        calculateDuration();
        }, [app]);


    const classes = useStyles();
    if (!app) {
        return <Redirect to={{ pathname: '/logout' }} />
    } else {
        return (
            <Paper elevation={3} className={classes.container}>
                <Typography className={classes.heading}>Sleep Timeline</Typography>
                {allData ? <Line data={data}/> :<Typography>Loading...</Typography>}
            </Paper>
        );
}
};
import React,  { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Redirect } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { RemoteMongoClient } from "mongodb-stitch-browser-sdk";

const useStyles = makeStyles(theme => ({
    container: {
        margin: '15% 5% 5% 5%',
        backgroundColor: '#eceff1',
        padding: '5px',
        border: 'none',
        borderRadius: '2px',
    },
    heading: {
        fontSize: '2rem',
        textAlign: 'center',
        color: '#1a237e',
        margin: '2% 0 2% 0',
    },
}));


export default function SleepWakeGraph(props) {
    const [sleepData, setSleep] = useState(undefined);
    const [wakeData, setWake] = useState(undefined);
    const app = props.location.app;

    function getData() {
        const options = { 'sort': { "current_date": -1 }, };
        const wakeQuery = { "sleep": false };
        const sleepQuery = { "sleep": true };
        const mongodb = app.getServiceClient(RemoteMongoClient.factory, "mongodb-atlas");
        const sleepCollection = mongodb.db("baldyData").collection("sleepData");
        sleepCollection.find(sleepQuery, options).toArray()
            .then((data) => {
                setSleep(data);
            })
            .catch((err) => err);
        sleepCollection.find(wakeQuery, options).toArray()
            .then((data) => {
                setWake(data);
            })
            .catch((err) => err)
    }

    useEffect(() => {
        getData();
    }, [sleepData]);

    function calculateCounts() {
        if (sleepData && wakeData){
            let sleepCount = [];
            let wakeCount = [];
            let one;
            let two;
            let three;
            let four;
            let five;
            let six;
            let seven;
            let eight;
            let nine;
            let ten;
            let eleven;
            let twelve;
            let thirteen;
            let fourteen;
            let fifteen;
            let sixteen;
            let seventeen;
            let eightteen;
            let nineteen;
            let twenty;
            let twentyone;
            let twentytwo;
            let twentythree;
            let twentyfour;
        } else {
            let sleepCount = [0];
            let wakeCount = [0];
        }
    };

    const sleepCountData = {
        labels: ['1 a.m.', '2 a.m.', '3 a.m.', '4 a.m.', '5 a.m.', '6 a.m.', '7 a.m.', '8 a.m.', '9 a.m.', '10 a.m.', '11 a.m.', '12 p.m.', '1 p.m.', '2 p.m.', '3 p.m.', '4 p.m.', '5 p.m.', '6  p.m.', '7 p.m.', '8 p.m.', '9 p.m.', '10 p.m.', '11 p.m.', '12 p.m.'],
        datasets: [
            {
            label: 'Sleep Frequency',
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
            data: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,171,81,92,20,21,22,24,24],
            }
        ]
        };


    const classes = useStyles();
    if (!app) {
        return <Redirect to={{ pathname: '/logout' }} />
    } else {
        return (
            <Paper elevation={3} className={classes.container}>
                <Typography className={classes.heading}>When does he Sleep?</Typography>
                {sleepData && wakeData ? <Line data={sleepCountData} /> : <Typography>Loading...</Typography>}
            </Paper>
        );
    }

}


import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { RemoteMongoClient } from "mongodb-stitch-browser-sdk";
import {Line} from 'react-chartjs-2';
import moment from 'moment';

const useStyles = makeStyles(theme => ({
    container: {
        margin: '2.5% 5% 5% 5%',
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

export default function SleepGraph(props) {
    const [sleepData, setSleep] = useState(undefined);
    const [wakeData, setWake] = useState(undefined);
    const app = props.location.app;

    function getData() {
        const options = {'sort' : {"current_date": -1},};
        const wakeQuery = {"sleep": false};
        const sleepQuery = {"sleep": true};
        const mongodb = app.getServiceClient(RemoteMongoClient.factory, "mongodb-atlas");
        const sleepCollection = mongodb.db("baldyData").collection("sleepData");
        sleepCollection.find(sleepQuery, options).toArray()
            .then((data) =>{
                setSleep(data);
            })
            .catch((err)=> err);
        sleepCollection.find(wakeQuery, options).toArray()
            .then((data) =>{
                setWake(data);
            })
            .catch((err)=> err)
    }

    useEffect(()=>{
        getData();
        }, [sleepData]);

    function calculateDuration() {
        if (sleepData && wakeData){
            let hours = [];
            let days = [];
            for (let i=0; i< sleepData.length; i++){
                days.push(sleepData[i].timeStamp.date)
                let startTime = sleepData[i].timeStamp.time;
                let endTime = wakeData[i].timeStamp.time;
                let dur = moment
                    .duration(moment(endTime, 'h:mm:ss a')
                    .diff(moment(startTime, 'h:mm:ss a')))
                    .asSeconds();
                hours.push(dur);
            }
            return [hours, days];
        } else {
            let hours = [];
            let days = [];
            return [hours, days];
        }
    }    
    
    const [hours, days] = calculateDuration();

    const data = {
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

    const classes = useStyles();
    if (!app) {
        return <Redirect to={{ pathname: '/logout' }} />
    } else {
        return (
            <Paper elevation={3} className={classes.container}>
                <Typography className={classes.heading}>Sleep Timeline</Typography>
                {sleepData && wakeData ? <Line data={data}/> :<Typography>Loading...</Typography>}
            </Paper>
        );
}
};
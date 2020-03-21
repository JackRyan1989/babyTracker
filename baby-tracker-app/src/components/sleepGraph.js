import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { RemoteMongoClient } from "mongodb-stitch-browser-sdk";
import {Line} from 'react-chartjs-2';

const useStyles = makeStyles(theme => ({
    container: {
        margin: '0 2.5% 5% 2.5%',
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
    console.log(props);
    const [sleepData, setSleep] = useState({});
    const [wakeData, setWake] = useState({});
    const app = props.location.app;

    const getData = () => {
        const mongodb = app.getServiceClient(RemoteMongoClient.factory, "mongodb-atlas");
        const sleepCollection = mongodb.db("baldyData").collection("sleepData");
        const sleepQuery = {"sleep": true};
        const wakeQuery = {"sleep": false};
        const options = {'sort' : {"current_date": -1},}
        sleepCollection.find(sleepQuery, options).toArray()
            .then((data) =>{
                setSleep(data)
            })
            .catch((err)=> console.log(err))
        sleepCollection.find(wakeQuery, options).toArray()
        .then((data) =>{
            setWake(data)
        })
        .catch((err)=> console.log(err))
    }

    useEffect(()=>{
        getData();
    }, []);

    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'My First dataset',
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
            data: [65, 59, 80, 81, 56, 55, 40]
          }
        ]
      };

    const classes = useStyles();
    console.log(sleepData);
    return (
        <Paper elevation={3} className={classes.container}>
            <Typography className={classes.heading}>Sleep Timeline</Typography>
            <Line data={data}/>
        </Paper>
    );
};
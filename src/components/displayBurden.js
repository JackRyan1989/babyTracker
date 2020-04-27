import React, { useState, useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { RemoteMongoClient } from "mongodb-stitch-browser-sdk";
import {Pie} from 'react-chartjs-2';

const useStyles = makeStyles(theme => ({
    container: {
        margin: '2.5% 1% 1% 1%',
        backgroundColor: '#eceff1',
        padding: '5px',
        border: 'none',
        borderRadius: '2px',
    },
    flex: {
        flexGrow: 1,
        paddingTop: '.4rem',
        margin: '.4rem',
    },
    heading: {
        fontSize: '2rem',
        textAlign: 'center',
        color: '#1a237e',
        margin: '2% 0 0% 0',
    },
    name: {
        backgroundColor: 'whitesmoke',
        margin: '1px',
        color: '#1a237e',
        borderStyle: 'solid',
        borderColor: '#78909c',
        borderWidth: '1px',
    }
})
);

export default function DisplayBurden(props) {
    const [data, setData] = useState(undefined);
    const app = props.location.app;

    function getData() {
        const mongodb = app.getServiceClient(RemoteMongoClient.factory, "mongodb-atlas");
        const sleepCollection = mongodb.db("baldyData").collection("sleepData");
        sleepCollection.find({}).toArray()
            .then((data) =>{
                setData(data);
            })
            .catch((err)=> err);
    }

    function calculateEffort() {
        if (data){
            let jackCount = 0;
            for (let i = 0; i < data.length; i++){
                if (data[i].user === '5e698b195dabe06755978529') {
                    jackCount++;
                }
            }
            let jackEff = (jackCount/data.length)*100;
            let ashEff = 100 - jackEff;
            return [ashEff.toFixed(2), jackEff.toFixed(2)];
        } else {
            return [0, 0]; 
        }
    }

    useEffect(()=>{
        getData();
        }, [data]);

    const classes = useStyles();
    const [ashEffort, jackEffort] = calculateEffort();

    const pieData = {
        labels: [
            'Ashley Effort',
            'Jack Effort',
        ],
        datasets: [{
            data: [ashEffort, jackEffort],
            backgroundColor: [
            '#FF6384',
            '#36A2EB',
            ],
            hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB',
            ]
        }]
    };


return (
    <>
        <Paper elevation={3} className={classes.container}>
            <Typography className={classes.heading}>Effort</Typography>
            <Pie data={pieData}/>
        </Paper>
    </>
)

}
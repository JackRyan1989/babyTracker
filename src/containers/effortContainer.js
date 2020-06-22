import React, { useEffect, useState } from 'react';
import { RemoteMongoClient } from "mongodb-stitch-browser-sdk";
import DisplayBurden from '../components/displayBurden';
import { Grid, Typography } from '@material-ui/core';

export default function EffortContainer(props) {
    const [data, setData] = useState(undefined);
    const [sleepData, setSleep] = useState(undefined);
    const [eatData, setEat] = useState(undefined);
    const [poopData, setPoop] = useState(undefined);
    const [dataAdded, setDataAdded] = useState(true);
    const app = props.app;

    useEffect(() => {
        if (dataAdded === true) {
            const mongodb = app.getServiceClient(RemoteMongoClient.factory, "mongodb-atlas");
            const sleepCollection = mongodb.db("baldyData").collection("sleepData");
            const eatCollection = mongodb.db("baldyData").collection("eat");
            const diaperCollection = mongodb.db("baldyData").collection("diaper");
            sleepCollection.find({}).toArray()
                .then((data) => {
                    setSleep(data);
                })
                .catch((err) => err);
            eatCollection.find({}).toArray()
                .then((data) => {
                    setEat(data);
                })
                .catch((err) => err);
            diaperCollection.find({}).toArray()
                .then((data) => {
                    setPoop(data);
                })
                .catch((err) => err);
            setDataAdded(false);
            //setData([sleepData, eatData, poopData]);
        }
    }, [dataAdded]);

    return (
        <Grid container>
            {data ?
                <Grid item xs={12}><DisplayBurden data={data} effortType={`Overall Effort`} /></Grid>
                : <Grid item xs={12} sm={12} md={6} lg={6}><Typography>No Overall Effort Available</Typography></Grid>
            }
            {sleepData ?
                <Grid item xs={12}><DisplayBurden data={sleepData} effortType={`Sleep Effort`} /></Grid>
                : <Grid item xs={12} sm={12} md={6} lg={6}><Typography>No Sleep Effort Available</Typography></Grid>
            }
            {eatData ?
                <Grid item xs={12}><DisplayBurden data={eatData} effortType={`Feeding Effort`} /></Grid>
                : <Grid item xs={12} sm={12} md={6} lg={6}><Typography>No Feeding Effort Available</Typography></Grid>
            }
            {poopData ?
                <Grid item xs={12}><DisplayBurden data={poopData} effortType={`Diaper Changing Effort`} /></Grid>
                : <Grid item xs={12} sm={12} md={6} lg={6}><Typography>No Diaper Changing Effort Available</Typography></Grid>
            }

        </Grid>
    )
};
import React, { useEffect, useState } from 'react';
import MiniDrawer from '../components/sidebar';
import { RemoteMongoClient } from "mongodb-stitch-browser-sdk";
import { Typography } from '@material-ui/core';

export default function AddData(props) {
    //Add props to local storage here? 
    const [data, setData] = useState(undefined);
    const [sleepData, setSleep] = useState(undefined);
    const [wakeData, setWake] = useState(undefined);
    const [movementData, setMove] = useState(undefined);
    const app = props.location.app;

    useEffect(()=>{
        const options = {'sort' : {"current_date": -1},};
        const wakeQuery = {"sleep": 'false'};
        const sleepQuery = {"sleep": 'true'};
        const mongodb = app.getServiceClient(RemoteMongoClient.factory, "mongodb-atlas");
        const sleepCollection = mongodb.db("baldyData").collection("sleepData");
        const moveCollection = mongodb.db("baldyData").collection("movementData");
        moveCollection.find({}, options).toArray()
             .then((data) => {
                 setMove(data);
                 })
             .catch((err) => err);
        sleepCollection.find(sleepQuery, options).toArray()
            .then((data) =>{
                setSleep(data);
            })
            .catch((err)=> err);
        sleepCollection.find(wakeQuery, options).toArray()
            .then((data) =>{
                setWake(data);
            })
            .catch((err)=> err);
        sleepCollection.find({}).toArray()
             .then((data) =>{
                 setData(data);
              })
             .catch((err)=> err);
        }, [app]);

    if (data && sleepData && wakeData && movementData){
        return (
            <>
                <MiniDrawer {...props} data={data} sleepData={sleepData} wakeData={wakeData} movementData={movementData} ></MiniDrawer>
            </>
        )
    } else {
        return (
            <>
                <Typography>Loading Data...</Typography>
            </>
        )
    }
};


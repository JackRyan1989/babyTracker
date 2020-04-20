import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core/';
import { RemoteMongoClient } from "mongodb-stitch-browser-sdk";
import download from 'downloadjs';

const useStyles = makeStyles(theme => ({
    dlButton: {
        color: 'white',
        backgroundColor: '#6666ff',
        width: '45%',
        height: '125%',
    },
})
);

export default function DownloadButton(props) {

    const classes = useStyles();
    const app = props.location.app;
    const mongodb = app.getServiceClient(RemoteMongoClient.factory, "mongodb-atlas");
    const sleepCollection = mongodb.db("baldyData").collection("sleepData");
    const movementCollection = mongodb.db("baldyData").collection("movementData");
    const options = {'sort' : {"current_date": -1},}; 
    const [sleepData, setSleep] = useState(undefined);
    const [movementData, setMove] = useState(undefined);
    const [complete, setComplete] = useState(false);
    
    function grabData() {
        sleepCollection.find({}, options).toArray()
            .then((data) =>{
                setSleep(data);
            })
            .catch((err)=> err);
        movementCollection.find({}, options).toArray()
        .then((data) =>{
            setMove(data);
        })
        .catch((err)=> err);
    }

    function downloadFile() {
        if (sleepData && movementData && !complete) {
            download(new Blob([sleepData, movementData]), "dezzyData.json", 'json');
            setComplete(true);
        }
    }

    useEffect(() => {
        grabData();
    }, [])

    return (
        <>
            <Button className={classes.dlButton} onClick={downloadFile}>Download Dezzy Data</Button>
        </>
    )

}
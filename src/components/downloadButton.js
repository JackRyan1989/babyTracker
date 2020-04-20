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
    const options = { 'sort': { "current_date": -1 }, };
    const [sleepData, setSleep] = useState(undefined);
    const [movementData, setMove] = useState(undefined);
    const [complete, setComplete] = useState(false);

    function grabData() {
        sleepCollection.find({}, options).toArray()
            .then((data) => {
                setSleep(data);
            })
            .catch((err) => err);
        movementCollection.find({}, options).toArray()
            .then((data) => {
                setMove(data);
            })
            .catch((err) => err);
    }

    function downloadFile() {
        if (sleepData && movementData && !complete) {
            let userRow = [];
            let sleepRow = [];
            let timeRow = [];
            sleepData.forEach(function (row) {
                userRow.push(row.user);
                sleepRow.push(row.sleep);
                timeRow.push(`${row.timeStamp.date} ${row.timeStamp.month} ${row.timeStamp.time} ${row.timeStamp.year}`)
            })
            let moveUserRow = [];
            let moveTimeRow = [];
            movementData.forEach(function (row) {
                moveUserRow.push(row.user)
                moveTimeRow.push(`${row.timeStamp.date} ${row.timeStamp.month} ${row.timeStamp.time} ${row.timeStamp.year}`)
            })
            let dataArray = [userRow, sleepRow, timeRow, moveUserRow, moveTimeRow]
            let csvContent = "data:text/csv;charset=utf-8," + dataArray.map(e => e.join(",")).join("\n");

            download(csvContent, "dezzySleepData.csv", 'csv');

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
import React, {useState, useEffect} from 'react';
import download from 'downloadjs';
import GetAppIcon from '@material-ui/icons/GetApp';
import { RemoteMongoClient } from "mongodb-stitch-browser-sdk";


export default function DownloadButton(props) {
    const [sleepData, setSleep] = useState([]);
    const [movementData, setMove] = useState([]);
    const [poopData, setPoop] = useState([]);
    const [eatData, setEat] = useState([]);

    const grabData = () => {
        const mongodb = props.app.getServiceClient(RemoteMongoClient.factory, "mongodb-atlas");
        const sleepCollection = mongodb.db("baldyData").collection("sleepData");
        const movementCollection = mongodb.db("baldyData").collection("movementData");
        const poopCollection = mongodb.db("baldyData").collection("diaper");
        const eatCollection = mongodb.db("baldyData").collection("eat");
        const options = { 'sort': { "current_date": -1 }, };
        sleepCollection.find({}, options).toArray()
            .then((res) => {
                setSleep(res)
            })
            .catch((err) => err);
        movementCollection.find({}, options).toArray()
        .then((res) => {
            setMove(res)
        })
        .catch((err) => err);
        poopCollection.find({}, options).toArray()
            .then((res) => {
                setPoop(res)
            })
            .catch((err) => err);
        eatCollection.find({}, options).toArray()
        .then((res) => {
            setEat(res)
        })
        .catch((err) => err);
    }

    useEffect(() => {
        grabData();
    }, [])

    const downloadFile = () => {
        if (sleepData && movementData && eatData && poopData) {
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
            let dataArray = [userRow, ['X'], sleepRow, ['XX'], timeRow, ['XXX'], moveUserRow, ['XXXX'], moveTimeRow]
            let csvContent = "data:text/csv;charset=utf-8," + dataArray.map(e => e.join(", \n"));

            download(csvContent, "dezzySleepData.csv", 'csv');
        } else {
            window.alert('Data not available.');
        }

    }

    return (
            <div onClick={() => downloadFile()}><GetAppIcon/></div>
    )

}
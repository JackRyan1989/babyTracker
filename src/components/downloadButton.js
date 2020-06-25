import React, { useState, useEffect } from 'react';
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
        sleepCollection.find({}).toArray()
            .then((res) => {
                setSleep(res)
            })
            .catch((err) => err);
        movementCollection.find({}).toArray()
            .then((res) => {
                setMove(res)
            })
            .catch((err) => err);
        poopCollection.find({}).toArray()
            .then((res) => {
                setPoop(res)
            })
            .catch((err) => err);
        eatCollection.find({}).toArray()
            .then((res) => {
                setEat(res)
            })
            .catch((err) => err);
    }

    useEffect(() => {
        grabData();
    }, [])

    const makeDataArr = (data) => {
        let newArr  = [];
        data.forEach((row) => {
                for (let key in row) {
                    if (row.hasOwnProperty(key)) {
                        if (key === 'timeStamp') {
                            for (let k in row[key]) {
                                newArr.push(row[key][k]);
                            }
                        } else {
                            newArr.push(row[key]);
                        }
                    }
                }
            })
        return newArr;
    }

    const downloadFile = () => {
        if (sleepData && movementData && eatData && poopData) {
            let dataArray = [sleepData, movementData, eatData, poopData];
            let newDataArray = [];
            let spacer = 'xxxx';
            for (let i = 0; i < dataArray.length; i++) {
                let item = makeDataArr(dataArray[i]);
                newDataArray.push(item, spacer);
            }
            let csvContent = "data:text/csv;charset=utf-8," + newDataArray;

            download(csvContent, "dezzySleepData.csv", 'csv');
        } else {
            window.alert('Data not available.');
        }

    }

    return (
        <div onClick={() => downloadFile()}><GetAppIcon /></div>
    )

}

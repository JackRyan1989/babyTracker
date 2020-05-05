import React,  { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { RemoteMongoClient } from "mongodb-stitch-browser-sdk";
import moment from 'moment';

const useStyles = makeStyles(theme => ({
    container: {
        margin: '2.5% 1% 1% 1%',
        backgroundColor: '#eceff1',
        padding: '5px',
        border: 'none',
        borderRadius: '2px',
    },
    heading: {
        fontSize: '2rem',
        textAlign: 'center',
        color: '#1a237e',
        margin: '2% 0 0% 0',
    },
}))

export default function MovementListing(props) {
    const [movementData, setMove] = useState(undefined);
    const app = props.location.app;

    function getData() {
        const options = { 'sort': { "current_date": -1 }, };
        const mongodb = app.getServiceClient(RemoteMongoClient.factory, "mongodb-atlas");
        const moveCollection = mongodb.db("baldyData").collection("movementData");
        moveCollection.find({}, options).toArray()
            .then((data) => {
                setMove(data);
            })
            .catch((err) => err);
    };
    
    useEffect(() => {
        getData();
    }, []);

    const classes = useStyles();

    return (
        <Paper elevation={3} className={classes.container}>
                <Typography className={classes.heading}>Movement List</Typography>
                {movementData ? movementData.map(function(item){
                    return <div><Typography>{item.timeStamp.time}, {item.timeStamp.date} {item.timeStamp.month} {item.timeStamp.year} </Typography></div>
                }) : <Typography>Loading...</Typography>} 
        </Paper>
    )

}
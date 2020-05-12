import React,  { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { RemoteMongoClient } from "mongodb-stitch-browser-sdk";

const useStyles = makeStyles(theme => ({
    container: {
        margin: '0 0 5% 0',
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
    listing: {
        padding: '0.5%',
        fontSize: '1.15em'
    },
    Mond: {
        color: '#110F2B',
    },
    Tues: {
        color: '#231F59',
    },
    Wedn: {
        color: '#352F87',
    },
    Thur: {
        color: '#473FB6',
    },
    Frid: {
        color: '#6358FB',
    },
    Satu: {
        color: '#1A1742',
    },
    Sund: {
        color: '#5147CD',
    }
}));

export default function MovementListing(props) {
    const [movementData, setMove] = useState(undefined);
    const app = props.location.app;

    useEffect(() => {
        const options = { 'sort': { "current_date": -1 }, };
        const mongodb = app.getServiceClient(RemoteMongoClient.factory, "mongodb-atlas");
        const moveCollection = mongodb.db("baldyData").collection("movementData");
        moveCollection.find({}, options).toArray()
            .then((data) => {
                setMove(data);
            })
            .catch((err) => err);
    }, [app]);

    const classes = useStyles();

    return (
        <Paper elevation={3} className={classes.container}>
                <Typography className={classes.heading}>Movement List</Typography>
                {movementData ? movementData.map(function(item){
                    let day = item.timeStamp.date.substring(0, 4);
                    return <div><Typography className={classes.listing, classes[day]}>{item.timeStamp.time}, {item.timeStamp.date} {item.timeStamp.month} {item.timeStamp.year} </Typography></div>
                }) : <Typography>Loading...</Typography>} 
        </Paper>
    )

}
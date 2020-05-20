import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { RemoteMongoClient } from "mongodb-stitch-browser-sdk";

const useStyles = makeStyles(theme => ({
    container: {
        backgroundColor: '#eceff1',
        padding: '5px',
        border: 'none',
        borderRadius: '2px',
        [theme.breakpoints.down('sm')]: {
            margin: '1%',
            padding: '2.5px',
        },
        [theme.breakpoints.up('md')]: {
            margin: '2.5% 1% 1% 1%',
            padding: '5px',
        },
        [theme.breakpoints.up('lg')]: {
            margin: '2.5% 1% 1% 1%',
            padding: '5px',
        },
    },
    heading: {
        fontWeight: '300',
        textAlign: 'center',
        color: '#1a237e',
        [theme.breakpoints.down('sm')]: {
            fontSize: '1.5rem',
            margin: '2% 0 0% 0',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '2rem',
            margin: '2% 0 0% 0',
        },
    },
    subHeading: {
        fontSize: '1.50rem',
        fontWeight: '500',
        margin: '2.5% 0 1% 0',
        textDecoration: 'underline',
    },
    button: {
        margin: '2%',
    },
}));

export default function ContractionLog(props) {
    const classes = useStyles();
    const [comment, setComment] = useState(undefined);
    const [contractionData, setContractData] = useState(undefined);
    const app = props.location.app;
    const mongodb = app.getServiceClient(RemoteMongoClient.factory, "mongodb-atlas");
    const contractionCollection = mongodb.db("baldyData").collection("contractionData");

    useEffect(()=> {
        contractionCollection.find({}).toArray()
              .then((data)=> {
                  setContractData(data);
              })
              .catch((err) => err);
    }, []);
    
    const commentInput = event => {
        setComment(event.target.value);
    };

    const addComment = (id) => {
        contractionCollection.updateOne({'_id': id},
        {$set:{comment: comment}}, {upsert:true})
        .catch(console.error);
    }

    return (
        <Paper elevation={3} className={classes.container}>
            <Typography className={classes.heading}>Contraction Log</Typography>
            <Grid container>
                <Grid xs={4} className={classes.subHeading}>Start Time</Grid>
                <Grid xs={4} className={classes.subHeading}>Duration</Grid>
                <Grid xs={4} className={classes.subHeading}>Comment</Grid>
                {contractionData ? contractionData.map(function (item) {
                    return (
                        <>
                        <Grid item xs={4}><Typography>{item.timeStamp.time}, {item.timeStamp.date} </Typography></Grid>
                        <Grid item xs={4}><Typography>{item.duration}</Typography></Grid>
                        <Grid item xs={4}>{item.comment ? <Typography>{item.comment}</Typography> : <form noValidate autoComplete="off"><TextField value={comment} onChange={commentInput} size="small" id="outlined-basic" label="Add Comment" variant="outlined"  /><Button className={classes.button} onClick={() => addComment(item._id)} variant="contained" color="primary" size='small'>Submit</Button></form>} </Grid>
                        </>
                    )
                })
                    : <Grid item xs={4}><Typography>Loading...</Typography></Grid>}
            </Grid>
        </Paper>
    )

}
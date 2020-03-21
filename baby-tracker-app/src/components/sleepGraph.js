import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
    container: {
        margin: '0 2.5% 5% 2.5%',
        backgroundColor: '#eceff1',
        padding: '5px',
        border: 'none',
        borderRadius: '2px',
    },
    heading: {
        fontSize: '2rem',
        textAlign: 'center',
        color: '#1a237e',
        margin: '2% 0 2% 0',
    },
}));

export default function SleepGraph(props) {
    console.log(props);
    const [data, setData] = useState({});
    const [app, setApp] = useState(props.location.app);
    const [client, setClient] = useState(props.location.client);
    const [mongodbClient, setMongodbClient] = useState(props.location.mongodbClient);

    const getData = () => {
        
    }

    const classes = useStyles();
    return (
        <Paper elevation={3} className={classes.container}>
            <Typography className={classes.heading}>Sleep Timeline</Typography>
        </Paper>
    );
};
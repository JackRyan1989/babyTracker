import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

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
    const movementData = props.movementData;
    const app = props.location.app;
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
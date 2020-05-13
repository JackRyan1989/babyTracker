import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

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
    Mond: {
        color: '#110F2B',
        textAlign: 'center',
        padding: '0.5%',
        [theme.breakpoints.down('sm')]: {
            fontSize: '.75em',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '1em',
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: '1.15em',
        },
    },
    Tues: {
        color: '#231F59',
        textAlign: 'center',
        padding: '0.5%',
        [theme.breakpoints.down('sm')]: {
            fontSize: '.75em',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '1em',
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: '1.15em',
        },
    },
    Wedn: {
        color: '#352F87',
        textAlign: 'center',
        padding: '0.5%',
        [theme.breakpoints.down('sm')]: {
            fontSize: '.75em',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '1em',
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: '1.15em',
        },
    },
    Thur: {
        color: '#473FB6',
        textAlign: 'center',
        padding: '0.5%',
        [theme.breakpoints.down('sm')]: {
            fontSize: '.75em',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '1em',
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: '1.15em',
        },
    },
    Frid: {
        color: '#6358FB',
        textAlign: 'center',
        padding: '0.5%',
        [theme.breakpoints.down('sm')]: {
            fontSize: '.75em',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '1em',
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: '1.15em',
        },
    },
    Satu: {
        color: '#1A1742',
        textAlign: 'center',
        padding: '0.5%',
        [theme.breakpoints.down('sm')]: {
            fontSize: '.75em',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '1em',
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: '1.15em',
        },
    },
    Sund: {
        color: '#5147CD',
        textAlign: 'center',
        padding: '0.5%',
        [theme.breakpoints.down('sm')]: {
            fontSize: '.75em',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '1em',
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: '1.15em',
        },
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
                    return <div><Typography className={classes[day]}>{item.timeStamp.time}, {item.timeStamp.date} {item.timeStamp.month} {item.timeStamp.year} </Typography></div>
                }) : <Typography>Loading...</Typography>} 
        </Paper>
    )

}
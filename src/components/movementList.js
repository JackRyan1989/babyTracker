import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
    container: {
        display: 'grid',
        placeItems: 'center',
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
        width: '100%',
        color: '#110F2B',
        textAlign: 'center',
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
        width: '100%',
        color: '#231F59',
        textAlign: 'center',
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
        width: '100%',
        color: '#352F87',
        textAlign: 'center',
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
        width: '100%',
        color: '#473FB6',
        textAlign: 'center',
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
        width: '100%',
        color: '#6358FB',
        textAlign: 'center',
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
        width: '100%',
        color: '#1A1742',
        textAlign: 'center',
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
        width: '100%',
        color: '#5147CD',
        textAlign: 'center',
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
}));

export default function MovementListing(props) {
    const movementData = props.movementData;
    const recentData = movementData.slice(movementData.length - 10);
    const [data, setData] = useState(recentData);
    const [showAll, setShow] = useState(false);
    const classes = useStyles();

    const toggleData = () => {
        setShow(!showAll);
    }

    useEffect(() => {
        if (showAll) {
            setData(movementData);
        } else {
            setData(recentData);
        }
    }, [showAll])
    
    return (
        <Paper elevation={3} className={classes.container}>
                <Typography className={classes.heading}>Movement List</Typography>
                <Button variant="contained" disableElevation size="small" className={classes.showButton} onClick={()=> toggleData()}>{showAll ? "Hide" : "Show All Data"}</Button>
                {movementData ? data.map(function(item){
                    let day = item.timeStamp.date.substring(0, 4);
                    return (
                        <div>
                            <Typography className={classes[day]}>{item.timeStamp.time}, {item.timeStamp.date} {item.timeStamp.month} {item.timeStamp.year} </Typography>
                        </div>

                    )
                })
                : <Typography>Loading...</Typography>} 
        </Paper>
    )

}
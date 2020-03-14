import React from 'react';
import { Avatar, Container, Typography, CssBaseline, Paper } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

// Styling:
const useStyles = makeStyles(theme => ({
    box: {
        backgroundColor: 'whitesmoke',
        borderRadius: '5px',
        width: '50%',
        marginTop: theme.spacing(8),
        marginLeft: '25%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        alignSelf: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
        border: 'solid',
        borderColor: 'lightgrey',
        borderWidth: '1px',
    },
    loginHeader: {
        width: '40%',
        color: 'black',
        textAlign: 'center',
        alignContent: 'center',
        paddingBottom: '10%',
        [theme.breakpoints.down('sm')]: {
            fontSize: '22px',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '36px',
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: '52px',
        },
    },
}));

function Logout() {
    const classes = useStyles();
        return (
            <Container maxWidth='lg'>
                <CssBaseline />
                <Paper className={classes.box}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography className={classes.loginHeader} variant='h3'>You have signed out.</Typography>
                </Paper>
            </Container>
        )
    }

export default Logout;
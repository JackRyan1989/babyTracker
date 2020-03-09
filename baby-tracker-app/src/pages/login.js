import React, { useState, useEffect } from 'react';
import { Avatar, Button, Container, TextField, Typography, CssBaseline, Paper } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Stitch, RemoteMongoClient, UserPasswordCredential } from "mongodb-stitch-browser-sdk";

// Styling:
const useStyles = makeStyles(theme => ({
    text: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        width: '50%',
        margin: '0 25%',
    },
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
    loginButton: {
        color: 'white',
        border: 'solid',
        borderColor: 'black',
        borderWidth: '1px',
        margin: theme.spacing(3, 0, 2),
    },
    loginHeader: {
        width: '40%',
        color: 'black',
        textAlign: 'center',
        alignContent: 'center',
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
}));

function Login() {
    //Initial variable creation:
    const [app, setApp] = useState('');
    const [db, setDB] = useState('');
    const [loginError, setError] = useState('');
    const classes = useStyles();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //Setup Mongo Stitch App:
    useEffect(() => {
        const client = Stitch.initializeDefaultAppClient("baldytracker-slqit");
        const mongodb = client.getServiceClient(
            RemoteMongoClient.factory,
            "mongodb-atlas"
        );
        setDB(mongodb.db('babytracker'));
        setApp(Stitch.defaultAppClient);
    }, []);

    //Functions:
    const emailInput = event => {
        setEmail(event.target.value);
    };
    const passwordInput = event => {
        setPassword(event.target.value);
    };
    const login = event => {
        const credential = new UserPasswordCredential(email, password);
        console.log(credential);
        app.auth.loginWithCredential(credential)
            .then(authedUser => {
                console.log(`successfully logged in with id: ${authedUser.id}`)
            })
            .catch(err => {
                console.error(`login failed with error: ${err}`)
                setError(err);
            })
    }

    return (
        <Container maxWidth='lg'>
            <CssBaseline />
            <Paper className={classes.box}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography className={classes.loginHeader} variant='h2'>Sign In</Typography>
                <form className={classes.form} noValidate>
                    <TextField
                        className={classes.text}
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        value={email}
                        onChange={emailInput}
                        autoFocus
                    />
                    <TextField
                        className={classes.text}
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        value={password}
                        onChange={passwordInput}
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                </form>
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    className={classes.loginButton}
                    onClick={login}
                >
                    Sign In
                </Button>
            </Paper>
        </Container>
    )
}

export default Login;
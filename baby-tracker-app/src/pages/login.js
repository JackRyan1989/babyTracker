import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
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
    errorHeader: {
        width: '40%',
        color: 'white',
        backgroundColor: '#f28c82',
        textAlign: 'center',
        alignContent: 'center',
        border: 'none',
        borderRadius: '5px',
        margin: '0 25%',
        padding: theme.spacing(1),
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
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);
    const classes = useStyles();

    //Setup Mongo Stitch App:
    useEffect(() => {
        const client = Stitch.initializeDefaultAppClient("baldytracker-vlawr");
        const mongodb = client.getServiceClient(
            RemoteMongoClient.factory,
            "mongodb-atlas"
        );
        const db = mongodb.db('baldyData');
        setDB(db);
        const app = Stitch.defaultAppClient;
        setApp(app);
    }, []);

    //Functions:
    const emailInput = event => {
        setEmail(event.target.value);
    };
    const passwordInput = event => {
        setPassword(event.target.value);
    };
    const login = () => {
        console.log(email, password);
        const credential = new UserPasswordCredential(email, password);
        app.auth.loginWithCredential(credential)
            .then(authedUser => {
                console.log(`successfully logged in with id: ${authedUser.id}`)
                setRedirect(true);
            })
            .catch(err => {
                console.error(`login failed with error: ${err}`)
                setError(err);
            })
    }

    if (redirect) {
        return <Typography>FART</Typography>
        // return <Redirect to={{ pathname: '/add', state: { test: 'test' } }} />
    } else {
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
                    {loginError ? <Typography className={classes.errorHeader}>Invalid Credentials</Typography> : null}
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
}

export default Login;
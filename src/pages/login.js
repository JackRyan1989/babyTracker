import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { Button, Container, TextField, Typography, CssBaseline, Paper } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
import { Stitch, RemoteMongoClient, UserPasswordCredential } from "mongodb-stitch-browser-sdk";
import moment from 'moment';

// Styling:
const dayStyles = makeStyles(theme => ({
    text: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        [theme.breakpoints.down('sm')]: {
            width: '85%',
            margin: '0 10%',
        },
        [theme.breakpoints.up('md')]: {
            width: '65%',
            margin: '0 15%',
        },
        [theme.breakpoints.up('lg')]: {
            width: '50%',
            margin: '0 25%',
        },
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
    link: {
        padding: '5%',
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
    signupButton: {
        color: 'white',
        border: 'solid',
        borderColor: 'black',
        borderWidth: '1px',
        margin: theme.spacing(1),
    },
}));

const nightStyles = makeStyles(theme => ({
    text: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: 'whitesmoke',
        [theme.breakpoints.down('sm')]: {
            width: '85%',
            margin: '0 10%',
        },
        [theme.breakpoints.up('md')]: {
            width: '65%',
            margin: '0 15%',
        },
        [theme.breakpoints.up('lg')]: {
            width: '50%',
            margin: '0 25%',
        },
    },
    box: {
        backgroundColor: 'grey',
        borderRadius: '5px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        alignSelf: 'center',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            height: '85%',
            marginTop: '2.5%',
            paddingBottom: '2.5%',
            paddingTop: '2.5%',
        },
        [theme.breakpoints.up('md')]: {
            width: '75%',
            height: '100%',
            paddingTop: '2.5%',
            paddingBottom: '2.5%',
            marginLeft: '7.5%',
            marginTop: '2.5%'
        },
        [theme.breakpoints.up('lg')]: {
            width: '75%',
            height: '100%',
            paddingTop: '2.5%',
            paddingBottom: '2.5%',
            marginLeft: '12.5%',
            marginTop: '5%',
        },
    },
    loginButton: {
        color: 'white',
        border: 'none',
        margin: theme.spacing(3, 0, 2),
        backgroundColor: 'grey',
        '&:hover': {
            backgroundColor: 'lightgrey'
        },
    },
    loginHeader: {
        width: '40%',
        color: 'white',
        textAlign: 'center',
        alignContent: 'center',
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
    link: {
        padding: '5%',
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
    signupButton: {
        color: 'black',
        border: 'solid',
        borderColor: 'white',
        borderWidth: '1px',
        margin: theme.spacing(1),
    },
}));

function Login() {
    //Initial variable creation:
    const [app, setApp] = useState('');
    const [client, setClient] = useState('');
    const [mongodbClient, setMongoDBClient] = useState('');
    const [db, setDB] = useState('');
    const [loginError, setError] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);
    const [user, setUserID] = useState('');
    let classes;
    const now = moment().format('H');
    (now <= 6 || now >= 20 )? classes = nightStyles(): classes = dayStyles()

    //Setup Mongo Stitch App:
    useEffect(() => {
        // Initialize Stitch App Client
        const client = Stitch.initializeDefaultAppClient("baldytracker-vlawr");

        const mongodb = client.getServiceClient(
            RemoteMongoClient.factory,
            "mongodb-atlas"
        );
        const users = mongodb.db('baldyData').collection('userCreds');
        const app = Stitch.defaultAppClient;
        setClient(client);
        setDB(users);
        setMongoDBClient(mongodb);
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
        const credential = new UserPasswordCredential(email, password);
        app.auth.loginWithCredential(credential)
            .then(authedUser => {
                setUserID(authedUser.id);
                setRedirect(true);
            })
            .catch(err => {
                console.error(`login failed with error: ${err}`)
                setError(err);
            })
    }
    
    if (redirect) {
        return <Redirect to={{ pathname: '/add', app, client, db, mongodbClient, user }} />
    } else {
        return (
            <Container className={classes.main} maxWidth='lg'>
                <CssBaseline />
                <Paper className={classes.box}>
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
                        elevation='3'
                        className={classes.loginButton}
                        onClick={login}
                    >
                        Sign In
                </Button>
                    {/* <Link to={{
                        pathname: '/signup',
                        app,
                        client,
                        db,
                        mongodbClient,
                    }}
                    className={classes.link}
                    >First time user? Click here to Sign Up</Link> */}
                </Paper>
            </Container>
        )
    }
}

export default Login;
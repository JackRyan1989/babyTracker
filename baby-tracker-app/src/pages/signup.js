import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { Avatar, Button, Container, TextField, Typography, CssBaseline, Paper } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Stitch, UserPasswordCredential, UserPasswordAuthProviderClient } from "mongodb-stitch-browser-sdk";

// Styling:
const useStyles = makeStyles(theme => ({
    text: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        [theme.breakpoints.down('sm')]: {
            width: '85%',
            margin: '0 10%',
        },
        [theme.breakpoints.up('md')]: {
            width: '50%',
            margin: '0 25%',
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

function SignUp(props) {
    //Initial variable creation:
    const [app, setApp] = useState('');
    const [client, setClient] = useState('');
    const [mongdbClient, setMongoDBClient] = useState('');
    const [db, setDB] = useState('');
    const [loginError, setLoginError] = useState(false);
    const [signupError, setsignupError] = useState(false);
    const [error, setError] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);
    const classes = useStyles();

    //Setup Mongo Stitch App:
    useEffect(() => {
        setClient(props.location.client);
        setMongoDBClient(props.location.mongdbClient);
        setDB(props.location.db);
        setApp(props.location.app);
    }, [props.location]);

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
                console.log(`successfully logged in with id: ${authedUser.id}`)
                createUser(authedUser.id);
            })
            .catch(err => {
                console.error(`login failed with error: ${err}`)
                setLoginError(err);
            })
    }
    const signIn = () => {
        const emailPasswordClient = client.auth.getProviderClient(UserPasswordAuthProviderClient.factory);
        emailPasswordClient.registerWithEmail(email, password)
            .then(() => {
                login()
            })
            .catch(err => {
                setsignupError(true); 
                setError(err);  
            });
    }
    const createUser = (id) => {
        db
            .insertOne({
                owner_id: id,
                email: email,
                password: password,
            })
            .then(() =>{
                setRedirect(true);
            })
            .catch((err)=>{
                console.log('Create User Error ' + err)
                setsignupError(true); 
                setError(err);  
            });
    };

    if (redirect) {
        return <Redirect to={{ pathname: '/add', state: { test: 'test' } }} />
    } else {
        return (
            <Container maxWidth='lg'>
                <CssBaseline />
                <Paper className={classes.box}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography className={classes.loginHeader} variant='h3'>New User Sign In</Typography>
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
        {signupError ? <Typography className={classes.errorHeader}>{error.message}</Typography> : null}
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        className={classes.loginButton}
                        onClick={signIn}
                    >
                        Create User
                </Button>
                </Paper>
            </Container>
        )
    }
}

export default SignUp;
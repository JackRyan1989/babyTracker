import React from 'react';
import { Box, Button, Container, Grid, TextField, Typography, positions } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
import '../css/login.css';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

function Login() {
    const classes = useStyles();
    return (
        <Container maxWidth='lg' style={{ backgroundColor: '#cfe8fc', height: '100vh' }}>
            <Box id="loginBox">
                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <TextField id="email" label="Email" />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField id="password" label="Password" />
                    </Grid>
                    <Grid item xs={12}>
                        <Button id="subCreds">Login</Button>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    )
}

export default Login;
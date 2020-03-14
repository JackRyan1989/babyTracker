import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Avatar, Button, Container, TextField, Typography, CssBaseline, Paper } from '@material-ui/core/';
import HeaderHideScroll from '../components/headerHideScroll';
import SleepButton from '../components/sleepButton';
import WakeButton from '../components/wakeButton';

function AddData(props) {

    return (
        <>
        <HeaderHideScroll></HeaderHideScroll>
        <Typography>Hi</Typography>
        <Typography>Hi</Typography>
        <Typography>Hi</Typography>
        <SleepButton />
        <WakeButton />
        </>
    )

};

export default AddData;
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import HeaderHideScroll from '../components/headerHideScroll';
import MiniDrawer from '../components/sidebar';

const useStyles = makeStyles(theme => ({
    button: {
        marginTop: '15%',
        marginLeft: '3%',
        padding: theme.spacing(1),
        textAlign: 'center',
    },
    buttonBottom: {
        marginBottom: '5%',
        marginTop: '15%',
        marginLeft: '3%',
        padding: theme.spacing(1),
        textAlign: 'center',
    },
})
);

function AddData(props) {
    const classes = useStyles();
    return (
        <>
            <MiniDrawer {...props}></MiniDrawer>
        </>
    )

};

export default AddData;
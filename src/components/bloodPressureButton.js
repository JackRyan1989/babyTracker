import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            padding: '2.5%',
            border: 'solid lightgrey 1px',
        },
    },
    sendButton: {
        color: '#010101',
        width: '75%',
        backgroundColor: 'white',
        margin: '2.5%',
        '&:hover': {
            backgroundColor: 'lightgrey',
        },
    },
    warningText: {
        color: 'black',
        backgroundColor: '#eb7070',
        width: '50%',
        padding: '2%',
        borderRadius: '10px',
        textAlign: 'center',
    },
    sentText: {
        color: 'black',
        backgroundColor: '#9eee8b',
        width: '50%',
        padding: '2%',
        borderRadius: '10px',
        textAlign: 'center',
    },
    textBox: {
        margin: '2% 0 0 0',
        backgroundColor: 'white',
        borderRadius: '4px',
    }
}));


export default function BloodPressureButton(props) {
    const styles = useStyles();
    let { sError, dError, pError } = props
    return (
        <div className={styles.root}>
            <form>
                {sError ?
                    <TextField
                        error
                        id="systolic"
                        label="SYS."
                        defaultValue=""
                        variant="outlined"
                        onChange={props.enterValue}
                        className={styles.textBox}
                        value={props.systolic}
                    /> :
                    <TextField
                        id="systolic"
                        label="SYS."
                        defaultValue=""
                        variant="outlined"
                        onChange={props.enterValue}
                        className={styles.textBox}
                        value={props.systolic}
                    />
                }
                {dError ?
                    <TextField
                        error
                        id="diastolic"
                        label="DIA."
                        defaultValue=""
                        variant="outlined"
                        onChange={props.enterValue}
                        className={styles.textBox}
                        value={props.diastolic}
                    />
                    :
                    <TextField
                        id="diastolic"
                        label="DIA."
                        defaultValue=""
                        variant="outlined"
                        onChange={props.enterValue}
                        className={styles.textBox}
                        value={props.diastolic}
                    />
                }
                {pError ?
                    <TextField
                        error
                        id="pulse"
                        label="PUL."
                        defaultValue=""
                        variant="outlined"
                        onChange={props.enterValue}
                        className={styles.textBox}
                        value={props.pulse}
                    /> :
                    <TextField
                        id="pulse"
                        label="PUL."
                        defaultValue=""
                        variant="outlined"
                        onChange={props.enterValue}
                        className={styles.textBox}
                        value={props.pulse}
                    />

                }
            </form>
            <Button className={styles.sendButton} onClick={() => props.submitData()}>Send Data</Button>
            {props.dataSent && !props.duplicate ? <Typography className={styles.sentText}>Data saved!</Typography> : null}
            {props.duplicate ? <Typography className={styles.warningText}>Data already submitted!</Typography> : null}
        </div>
    )

};

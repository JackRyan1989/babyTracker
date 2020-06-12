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
        padding:'2%',
        borderRadius: '10px',
        textAlign: 'center',
    },
    sentText: {
      color: 'black',
      backgroundColor: '#9eee8b',
      width: '50%',
      padding:'2%',
      borderRadius: '10px',
      textAlign: 'center',
  },
  textBox : {
      margin: '2% 0 0 0',
  }
  }));
  

export default function BloodPressureButton(props) {
const styles = useStyles();
return (
    <div className={styles.root}>
        <form>
        <TextField
        //   error
          id="systolic"
          label="SYS."
          defaultValue=""
          //helperText="Must be a number between 100 and 200."
          variant="outlined"
          onChange={props.enterValue}
          className={styles.textBox}
        />
        <TextField
        //   error
          id="diastolic"
          label="DIA."
          defaultValue=""
          //helperText="Must be a number between 70 and 160."
          variant="outlined"
          onChange={props.enterValue}
          className={styles.textBox}
        />
        <TextField
        //   error
          id="pulse"
          label="PUL."
          defaultValue=""
          //helperText="Must be a number between 0 and 200."
          variant="outlined"
          onChange={props.enterValue}
          className={styles.textBox}
        />
        </form>
        <Button className={styles.sendButton} onClick={() => props.submitData()}>Send Data</Button>
        {props.dataSent && !props.duplicate ? <Typography className={styles.sentText}>Data saved!</Typography> : null}
        {props.duplicate ? <Typography className={styles.warningText}>Data already submitted!</Typography> : null}
    </div>
)

};

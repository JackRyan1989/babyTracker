import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
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
    boobButton: {
       color: '#010101',
       backgroundColor: 'white',
       margin: '2.5%',
       '&:hover': {
        backgroundColor: 'lightgrey',
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
    boobButtonSelected: {
        color: '#010101',
        backgroundColor: '#f59e8f',
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
  }));
  

export default function EatButton(props) {
const styles = useStyles();
return (
    <div className={styles.root}>
        {props.leftBoob ? <Button className={styles.boobButtonSelected} onClick={() => props.onClick('left')}>Left Boob</Button> : <Button className={styles.boobButton} onClick={() => props.onClick('left')}>Left Boob</Button>}
        {props.rightBoob ? <Button className={styles.boobButtonSelected} onClick={() => props.onClick('right')}>Right Boob</Button> : <Button className={styles.boobButton} onClick={() => props.onClick('right')}>Right Boob</Button>}
        <Button className={styles.sendButton} onClick={() => props.submitData()}>Send Data</Button>
        {props.dataSent && !props.duplicate ? <Typography className={styles.sentText}>Data saved!</Typography> : null}
        {props.duplicate ? <Typography className={styles.warningText}>Data already submitted!</Typography> : null}
    </div>
)

};

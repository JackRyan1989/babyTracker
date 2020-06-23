import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
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
  form: {
    backgroundColor: 'whitesmoke',
  },
  formItem: {
    padding: "0 0 0 1.5%",
  },
}));


export default function EatButton(props) {
  const styles = useStyles();
  return (
    <div className={styles.root}>
      <FormGroup row className={styles.form}>
        <FormControlLabel
          control={<Checkbox checked={props.leftBoob} onChange={props.onChange} name="leftBoob" />}
          label="Left Boob"
          className={styles.formItem}
        />
        <FormControlLabel
          control={<Checkbox checked={props.rightBoob} onChange={props.onChange} name="rightBoob" />}
          label="Right Boob"
          className={styles.formItem}
        />
        <FormControlLabel
          control={<Checkbox checked={props.bottle} onChange={props.onChange} name="bottle" />}
          label="Bottle"
          className={styles.formItem}
        />
      </FormGroup>
      <Button className={styles.sendButton} onClick={() => props.submitData()}>Send Data</Button>
      {props.dataSent && !props.duplicate ? <Typography className={styles.sentText}>Data saved!</Typography> : null}
      {props.duplicate ? <Typography className={styles.warningText}>Data already submitted!</Typography> : null}
    </div>
  )

};

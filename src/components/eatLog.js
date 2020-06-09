import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));

  export default function EatButton(props) {
      console.log(props);
    const styles = useStyles();
    return (
        <div className={styles.root}>
            {props.data.length >= 1 ? props.data.map(function(item) {
            return (
                <Typography>{item}</Typography>
            )})
            : <Typography>Loading...</Typography>}
        </div>
    )
    
    };
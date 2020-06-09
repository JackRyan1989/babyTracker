import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

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
    for (const prop in props.data) {
        console.log(`${props.data[prop]}`)
    }
    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
    setOpen(!open);
        };
    return (
        <div className={styles.root}>
                <Typography>Place Holder!</Typography>
        </div>
    )
    
    };
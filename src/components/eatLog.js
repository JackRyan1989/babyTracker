import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Collapse from '@material-ui/core/Collapse';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    nested: {
        marginLeft: '2%',
        marginTop: '1%',
        color: '#0a0202',
        backgroundColor: '#f9bca4',
        borderRadius: '2px',
        '&:hover': {
            background: "whitesmoke",
        },
    },
    list: {
        width: '25%',
    },
    listItem: {
        padding: '2.5%',
    },
    subList: {
        color: 'black',
        backgroundColor: "#bfbaff",
        margin: '2.5%',
        borderRadius: '2px',
        padding: '2.5%',
        '&:hover': {
            background: "whitesmoke",
        },
    }
}));

export default function EatButton(props) {
    const styles = useStyles();
    let set = new Set();
    props.data.map((day) => {
        set.add(day.date)
    });
    let dayArray = Array.from(set);
    let daysArray = dayArray.reverse();
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <div className={styles.root}>
            <List
                component="nav"
                aria-labelledby="nested-list-subheader"
                className={styles.list}
            >
                {daysArray.map((elem) => {
                    return (
                        <>
                            <ListItem button id={elem} onClick={handleClick} className={styles.subList}>
                                <ListItemText primary={elem} />
                                {open ? <ExpandLess /> : <ExpandMore />}
                            </ListItem>
                            <Collapse in={open} timeout="auto" unmountOnExit>
                                <List component="div">
                                    {props.data.map((element) => {
                                        if (element.date === elem) {
                                            return (
                                                <>
                                                    <ListItem button className={styles.nested}>
                                                        <ListItemText className={styles.listItem} primary={element.time} />
                                                        {element.boob.map((boob) => {
                                                            return (
                                                                <ListItemText className={styles.listItem} primary={boob} />
                                                            )
                                                        })}
                                                    </ListItem>
                                                </>
                                            )
                                        } else {
                                            return null
                                        }
                                    })}
                                </List>
                            </Collapse>
                        </>
                    )
                }
                )}
            </List>
        </div >
    )

};
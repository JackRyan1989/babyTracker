import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMore from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    nested: {
        width: '100%',
        marginLeft: '1%',
        color: '#0a0202',
        border: 'solid black 1px',
        borderRadius: '2px',
        '&:hover': {
            background: "whitesmoke",
        },
    },
    list: {
        width: '75%',
    },
    listItem: {
        padding: '1%',
    },
    warning: {
        padding: '1%',
        color: 'red',
    }
}));

export default function DiaperButton(props) {
    const styles = useStyles();
    let data = props.data;
    let set = new Set();
    data.map((day) => {
        set.add(day.day)
    });
    let dayArray = Array.from(set);
    let daysArray = dayArray.reverse();

    return (
        <div className={styles.root}>
            <Typography className={styles.heading}>Data List</Typography>
            {daysArray.map((eachDay) => {
                return (
                    <>
                        <ExpansionPanel className={styles.list}>
                            <ExpansionPanelSummary
                                expandIcon={<ExpandMore />}
                                aria-controls={eachDay}
                                id={`${eachDay}-header`}
                            >
                                <Typography>{eachDay}</Typography>
                            </ExpansionPanelSummary>
                            {data.map((elem) => {
                                if (elem.day === eachDay) {
                                    return (
                                        <>
                                            <ExpansionPanelDetails>
                                                <List component="div" className={styles.nested}>
                                                    <ListItem button>
                                                        <ListItemText className={styles.listItem}>{elem.time}</ListItemText>
                                                    </ListItem>
                                                    <ListItem button>
                                                        {(elem.systolic >= 130) ? <ListItemText className={styles.warning}> Systolic BP: {elem.systolic}</ListItemText> : <ListItemText className={styles.listItem}> Systolic BP: {elem.systolic}</ListItemText>}
                                                    </ListItem>
                                                    <ListItem button>
                                                        {(elem.diastolic >= 90) ? <ListItemText className={styles.warning} >Diastolic BP: {elem.diastolic}</ListItemText> : <ListItemText className={styles.listItem} >Diastolic BP: {elem.diastolic}</ListItemText>}
                                                    </ListItem>
                                                    <ListItem button>
                                                        {(elem.pulse >= 100) ? <ListItemText className={styles.warning} >Pulse: {elem.pulse}</ListItemText> : <ListItemText className={styles.listItem} >Pulse: {elem.pulse}</ListItemText>}
                                                    </ListItem>
                                                </List>
                                            </ExpansionPanelDetails>
                                        </>
                                    )
                                } else {
                                    return null
                                }
                            })}
                        </ExpansionPanel>
                    </>

                )
            })}
        </div >
    )

};
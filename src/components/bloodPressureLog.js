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
        marginLeft: '2%',
        marginTop: '1%',
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
    sublistItem: {
        marginLeft: '1%',
        fontSize: '12px',
        padding: '1%',
    },
    listItem: {
        padding: '3%',
    },
}));

export default function DiaperButton(props) {
    const styles = useStyles();
    let data = props.data;
    console.log(props.data);

    return (
        <>
            <Typography>Placeholder</Typography>
            <Typography>{props.data.day} at {props.data.time}</Typography>
            <Typography>{props.data.systolic}</Typography>
            <Typography>{props.data.diastolic}</Typography>
            <Typography>{props.data.pulse}</Typography>
        </>
        // <div className={styles.root}>
        //     <Typography className={styles.heading}>Data List</Typography>
        //     {daysArray.map((elem) => {
        //         return (
        //             <>
        //                 <ExpansionPanel className={styles.list}>
        //                     <ExpansionPanelSummary
        //                         expandIcon={<ExpandMore />}
        //                         aria-controls={elem}
        //                         id={`${elem}-header`}
        //                     >
        //                         <Typography>{elem}</Typography>
        //                     </ExpansionPanelSummary>
        //                     <ExpansionPanelDetails>
        //                         <List component="div">
        //                             {props.data.map((element) => {
        //                                 if (element.date === elem) {
        //                                     return (
        //                                         <>
        //                                             <ListItem button className={styles.nested}>
        //                                                 <ListItemText className={styles.listItem} primary={element.time} />
        //                                                 {element.waste.map((wasteItem) => {
        //                                                     return (
        //                                                         <ListItemText className={styles.listItem}> <Typography className={styles.sublistItem}>{wasteItem}</Typography></ListItemText>
        //                                                     )
        //                                                 })}
        //                                             </ListItem>
        //                                         </>
        //                                     )
        //                                 } else {
        //                                     return null
        //                                 }
        //                             })}
        //                         </List>
        //                     </ExpansionPanelDetails>
        //                 </ExpansionPanel>
        //             </>
        //         )
        //     })}
        //</div >
    )

};
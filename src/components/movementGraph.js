import React,  { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Redirect } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import moment from 'moment';

const useStyles = makeStyles(theme => ({
    container: {
        margin: '2.5% 1% 1% 1%',
        backgroundColor: '#eceff1',
        padding: '5px',
        border: 'none',
        borderRadius: '2px',
    },
    heading: {
        fontSize: '2rem',
        textAlign: 'center',
        color: '#1a237e',
        margin: '2% 0 0% 0',
    },
}));


export default function MovementGraph(props) {
    const movementData = props.movementData;
    const [complete, setComplete] = useState(false);
    const [graphData, setData] = useState(undefined);
    const app = props.location.app;

    function calculateCounts() {
        if (movementData && ! complete){
            let moveTimes = [];
            let zero = 0;
            let one = 0;
            let two = 0;
            let three = 0;
            let four = 0;
            let five = 0;
            let six = 0;
            let seven = 0;
            let eight = 0;
            let nine = 0;
            let ten = 0;
            let eleven = 0;
            let twelve = 0;
            let thirteen = 0;
            let fourteen = 0;
            let fifteen = 0;
            let sixteen = 0;
            let seventeen = 0;
            let eightteen = 0;
            let nineteen = 0;
            let twenty = 0;
            let twentyone = 0;
            let twentytwo = 0;
            let twentythree = 0;
            for (let i=0; i < movementData.length; i++){
                let moveHour = moment(movementData[i].timeStamp.time, 'h:mm:ss a').format('HH');
                switch (moveHour) {
                    case '00':
                        zero ++;
                        break;
                    case '01':
                        one ++;
                        break;
                    case '02':
                        two++;
                        break;
                    case '03':
                        three++;
                        break;
                    case '04':
                        four ++;
                        break;
                    case '05':
                        five ++;
                        break;
                    case '06':
                        six++;
                        break;
                    case '07':
                        seven++;
                        break;
                    case '08':
                        eight ++;
                        break;
                    case '09':
                        nine ++;
                        break;
                    case '10':
                        ten ++;
                        break;
                    case '11':
                        eleven++;
                        break;
                    case '12':
                        twelve ++;
                        break;
                    case '13':
                        thirteen ++;
                        break;
                    case '14':
                        fourteen++;
                        break;
                    case '15':
                        fifteen++;
                        break;
                    case '16':
                        sixteen ++;
                        break;
                    case '17':
                        seventeen ++;
                        break;
                    case '18':
                        eightteen++;
                        break;
                    case '19':
                        nineteen++;
                        break;
                    case '20':
                        twenty ++;
                        break;
                    case '21':
                        twentyone ++;
                        break;
                    case '22':
                        twentytwo++;
                        break;
                    case '23':
                        twentythree++;
                        break;
                    default:
                        break;
                }
            }
            moveTimes.push(zero, one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eightteen, nineteen, twenty, twentyone, twentytwo, twentythree);
            const moveCountData = {
                labels: ['12 a.m.', '1 a.m.', '2 a.m.', '3 a.m.', '4 a.m.', '5 a.m.', '6 a.m.', '7 a.m.', '8 a.m.', '9 a.m.', '10 a.m.', '11 a.m.', '12 p.m.', '1 p.m.', '2 p.m.', '3 p.m.', '4 p.m.', '5 p.m.', '6  p.m.', '7 p.m.', '8 p.m.', '9 p.m.', '10 p.m.', '11 p.m.'],
                datasets: [
                    {
                    label: 'Movement Frequency',
                    fill: true,
                    lineTension: 0.25,
                    backgroundColor: 'rgba(238, 99, 99, 0.27)',
                    borderColor: 'rgba(238, 99, 99, 0.27)',
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: 'rgba(75,192,192,1)',
                    pointBackgroundColor: '#fff',
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: 'rgba(62, 93, 214, 1)',
                    pointHoverBorderColor: 'rgba(220,220,220,1)',
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: moveTimes,
                    }
                ]
                };
            setData(moveCountData);
            setComplete(true);
        } 
    };

    useEffect(() => {
        calculateCounts();
    }, [app]);

    const classes = useStyles();
    if (!app) {
        return <Redirect to={{ pathname: '/' }} />
    } else {
        return (
            <Paper elevation={3} className={classes.container}>
                <Typography className={classes.heading}>When does he move?</Typography>
                {graphData && complete ? <Line data={graphData} /> : <Typography>Loading...</Typography>}
            </Paper>
        );
    }

}


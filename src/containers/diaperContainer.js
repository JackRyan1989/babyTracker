import React, { Component } from "react";
import moment from 'moment';
import { RemoteMongoClient } from "mongodb-stitch-browser-sdk";
import { withStyles } from '@material-ui/core/styles';
import DiaperButton from '../components/diaperButton';
import DiaperLog from '../components/diaperLog';
import Typography from '@material-ui/core/Typography';

const useStyles = theme => ({
    DiaperContainer: {
        backgroundColor: '#eceff1',
        padding: '5px',
        border: 'none',
        borderRadius: '2px',
        [theme.breakpoints.down('sm')]: {
            margin: '1%',
            padding: '2.5px',
        },
        [theme.breakpoints.up('md')]: {
            margin: '2.5% 1% 1% 1%',
            padding: '5px',
        },
        [theme.breakpoints.up('lg')]: {
            margin: '2.5% 1% 1% 1%',
            padding: '5px',
        },
    },
    DiaperText: {
        fontSize: '1.75rem',
        margin: '2% 0 0% 0',
        textAlign: 'left',
        border: 'none',
        borderRadius: '2px',
        padding: '5%',
        backgroundColor: 'whitesmoke',
        textAlign: 'center',
        alignContent: 'center',
    }
});

class DiaperContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: false,
            diaperTimes: undefined,
            dataSent: false,
            duplicate: false,
            poop: false,
            pee: false,
            app: this.props.app,
        }
    };

    buttonClicked = (waste) => {
        this.setState({
            clicked: !this.state.clicked
        });
        (waste === 'poop' ? this.setState({ poop: !this.state.poop }) : this.setState({ pee: !this.state.pee }));
    };

    submitBoobData = () => {
        const mongodb = this.state.app.getServiceClient(RemoteMongoClient.factory, "mongodb-atlas");
        const diaperCollection = mongodb.db("baldyData").collection("diaper");
        let poop;
        let pee;
        if (this.state.poop) {
            poop = 'poop';
        }
        if (this.state.pee) {
            pee = 'pee';
        }
        if (this.state.dataSent === false) {
            const month = moment().format('MMMM');
            const day = moment().format('dddd Do');
            const date = `${month}, ${day}`;
            const time = moment().format('h:mm:ss a');
            diaperCollection.insertOne({
                    date: date, 
                    time: time,
                    waste: [poop, pee],
                }
            )
                .catch(console.error);
            this.setState({
                //feedingTimes: [...this.state.feedingTimes, date, time],
                dataSent: true,
                poop: false,
                pee: false,
            });
        } else {
            this.setState({
                duplicate: true,
            })
        }
    };

    componentDidMount() {
        const mongodb = this.state.app.getServiceClient(RemoteMongoClient.factory, "mongodb-atlas");
        const diaperCollection = mongodb.db("baldyData").collection("diaper");
        const options = { 'sort': { "current_date": -1 }, };
        diaperCollection.find({}, options).toArray()
            .then((data) => {
                let array = Object.keys(data).map(key => data[key]);
                this.setState({
                    diaperTimes: array,
                })
            })
            .catch((err) => err);
    }


    render() {
        return (
            <>
                <DiaperButton onClick={this.buttonClicked} submitData={this.submitBoobData} duplicate={this.state.duplicate} poop={this.state.poop} pee={this.state.pee} dataSent={this.state.dataSent} />
                {this.state.diaperTimes ? <DiaperLog data={this.state.diaperTimes} /> : <Typography>Loading...</Typography>} 
            </>
        )

    }
};

export default withStyles(useStyles)(DiaperContainer);
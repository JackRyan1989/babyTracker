import React, { Component } from "react";
import moment from 'moment';
import { RemoteMongoClient } from "mongodb-stitch-browser-sdk";
import { withStyles } from '@material-ui/core/styles';
import BloodPressureButton from '../components/bloodPressureButton';
import BPLog from '../components/bloodPressureLog';
import Typography from '@material-ui/core/Typography';

const useStyles = theme => ({
    container: {
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
});

class DiaperContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: undefined,
            clicked: false,
            dataSent: false,
            duplicate: false,
            diastolic: "",
            systolic: "",
            pulse: "",
            date: "",
            time: "",
            app: this.props.app,
            dError: false,
            sError: false,
            pError: false,
        }
    };

    enterValue = (e) => {
        let id = e.target.id;
        let val = e.target.value;
        let letters = /^[A-Za-z]+$/;
        if (val.match(letters) && id === 'diastolic'){
            this.setState({dError: true})
        } else {
            this.setState({dError: false})
        }
        if (val.match(letters) && id === 'systolic'){
            this.setState({sError: true})
        } else {
            this.setState({sError: false})
        }
        if (val.match(letters) && id === 'pulse'){
            this.setState({pError: true})
        } else {
            this.setState({pError: false})
        }
        this.setState({
            [id]: val,
        })
    }


    submitData = () => {
        const mongodb = this.state.app.getServiceClient(RemoteMongoClient.factory, "mongodb-atlas");
        const bpCollection = mongodb.db("baldyData").collection("bloodPressure");
        if (this.state.dataSent === false) {
            const day = moment().format('dddd MMMM Do');
            const time = moment().format('h:mm:ss a');
            bpCollection.insertOne({
                day: day,
                time: time,
                pulse: this.state.pulse,
                diastolic: this.state.diastolic,
                systolic: this.state.systolic,
            }
            )
                .catch(console.error);
            this.setState({
                dataSent: true,
                pulse: "",
                diastolic: "",
                systolic: "",
            });
        } else {
            this.setState({
                duplicate: true,
            })
        }
    };

    componentDidMount() {
        const mongodb = this.state.app.getServiceClient(RemoteMongoClient.factory, "mongodb-atlas");
        const bpCollection = mongodb.db("baldyData").collection("bloodPressure");
        const options = { 'sort': { "current_date": -1 }, };
        bpCollection.find({}, options).toArray()
            .then((res) => {
                this.setState({
                    data: res,
                })
            })
            .catch((err) => err);
    }


    render() {
        return (
            <>
                <BloodPressureButton diastolic={this.state.diastolic} systolic={this.state.systolic} pulse={this.state.pulse} submitData={this.submitData} enterValue={this.enterValue} duplicate={this.state.duplicate} dataSent={this.state.dataSent} dError={this.state.dError} pError={this.state.pError} sError={this.state.sError} />
                {this.state.data ? <BPLog data={this.state.data} /> : <Typography>Loading...</Typography>}
            </>
        )

    }
};

export default withStyles(useStyles)(DiaperContainer);
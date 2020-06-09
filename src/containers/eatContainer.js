import React, { Component } from "react";
import moment from 'moment';
import { RemoteMongoClient } from "mongodb-stitch-browser-sdk";
import { withStyles } from '@material-ui/core/styles';
import EatButton from '../components/eatButton';
import EatLog from '../components/eatLog';

const useStyles = theme => ({
    eatContainer: {
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
    eatText: {
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

class EatContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: false,
            whichBoob: [],
            feedingTimes: [],
            dataSent: false,
            duplicate: false,
            leftBoob: false,
            rightBoob: false,
            app: this.props.app,
        }
    };

    buttonClicked = (boob) => {
        this.setState({
            clicked: true,
            whichBoob: [...this.state.whichBoob, boob],
        });
        (boob === 'left'? this.setState({leftBoob: true}): this.setState({rightBoob: true}));
        
    };

    submitBoobData = () => {
        const mongodb = this.state.app.getServiceClient(RemoteMongoClient.factory, "mongodb-atlas");
        const eatCollection = mongodb.db("baldyData").collection("eat");
        if (this.state.dataSent === false) {
            const now = {
                month: moment().format('MMMM'),
                date: moment().format('dddd Do'),
                year: moment().format('YYYY'),
                time: moment().format('h:mm:ss a'),
            };
            eatCollection.insertOne({
                timeStamp: now,
                boobUsed: this.state.whichBoob,   
            }).catch(console.error);
            this.setState({
                feedingTimes: [...this.state.feedingTimes, now['time'], now['date'], now['month'], now['year']],
                dataSent: true,
            });
        } else {
            this.setState({
                duplicate: true,
            })
        }

    };

    componentDidMount() {
        const mongodb = this.state.app.getServiceClient(RemoteMongoClient.factory, "mongodb-atlas");
        const eatCollection = mongodb.db("baldyData").collection("eat");
        const options = { 'sort': { "current_date": -1 }, };
        // eatCollection.find({}, options).toArray()
        //         .then((data) => {
        //             this.setState({
        //                 feedingTimes: [...this.state.feedingTimes, data],
        //             })
        //         })
        //         .catch((err) => err);
    }


    render() {
        return (
            <>
                <EatButton onClick={this.buttonClicked} submitData={this.submitBoobData} duplicate={this.state.duplicate} leftBoob = {this.state.leftBoob} rightBoob={this.state.rightBoob}/>
                <EatLog data={this.state.feedingTimes}/>
            </>
        )

    }
};

export default withStyles(useStyles)(EatContainer);
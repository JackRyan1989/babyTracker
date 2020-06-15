import React, { Component } from "react";
import moment from 'moment';
import { RemoteMongoClient } from "mongodb-stitch-browser-sdk";
import { withStyles } from '@material-ui/core/styles';
import EatButton from '../components/eatButton';
import EatLog from '../components/eatLog';
import Typography from '@material-ui/core/Typography';

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
            feedingTimes: undefined,
            dataSent: false,
            duplicate: false,
            leftBoob: false,
            rightBoob: false,
            app: this.props.app,
        }
    };

    grabData = () => {
        const mongodb = this.state.app.getServiceClient(RemoteMongoClient.factory, "mongodb-atlas");
        const eatCollection = mongodb.db("baldyData").collection("eat");
        const options = { 'sort': { "current_date": -1 }, };
        eatCollection.find({}, options).toArray()
            .then((data) => {
                let array = Object.keys(data).map(key => data[key]);
                this.setState({
                    feedingTimes: array,
                })
            })
            .catch((err) => err);
    }

    buttonClicked = (boob) => {
        this.setState({
            clicked: !this.state.clicked
        });
        (boob === 'left' ? this.setState({ leftBoob: !this.state.leftBoob }) : this.setState({ rightBoob: !this.state.rightBoob }));
    };

    submitBoobData = () => {
        const mongodb = this.state.app.getServiceClient(RemoteMongoClient.factory, "mongodb-atlas");
        const eatCollection = mongodb.db("baldyData").collection("eat");
        let leftBoob;
        let rightBoob;
        if (this.state.leftBoob) {
            leftBoob = 'left';
        }
        if (this.state.rightBoob) {
            rightBoob = 'right';
        }
        if (this.state.dataSent === false) {
            const month = moment().format('MMMM');
            const day = moment().format('dddd Do');
            const date = `${month}, ${day}`;
            const time = moment().format('h:mm:ss a');
            eatCollection.insertOne({
                    date: date, 
                    time: time,
                    boob: [leftBoob, rightBoob],
                }
            )
                .catch(console.error);
            this.setState({
                dataSent: true,
                leftBoob: false,
                rightBoob: false,
            });
            this.grabData();
            this.timer = setTimeout(() => {
                this.setState({
                    dataSent: false,
                });
            }, 2500);
        } else {
            this.setState({
                duplicate: true,
            })
        }
    };

    componentDidMount() {
        this.grabData();
    }


    render() {
        return (
            <>
                <EatButton onClick={this.buttonClicked} submitData={this.submitBoobData} duplicate={this.state.duplicate} leftBoob={this.state.leftBoob} rightBoob={this.state.rightBoob} dataSent={this.state.dataSent} />
                {this.state.feedingTimes ? <EatLog data={this.state.feedingTimes} /> : <Typography>Loading...</Typography>} 
            </>
        )

    }
};

export default withStyles(useStyles)(EatContainer);
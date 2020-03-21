import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Group } from '@vx/group';
import { GlyphDot } from '@vx/glyph';
import { LinePath } from '@vx/shape';
import { genDateValue } from '@vx/mock-data';
import { scaleTime, scaleLinear } from '@vx/scale';
import { curveMonotoneX, curveBasis } from '@vx/curve';

const useStyles = makeStyles(theme => ({
    container: {
        margin: '0 2% 2% 5%',
        backgroundColor: '#eceff1',
        padding: '5px',
        border: 'none',
        borderRadius: '2px',
    },
}));

export default function SleepGraph(props) {
    const classes = useStyles();
    return (
        <>
        <Typography className={classes.container}>GRAPH GOES HERE</Typography>
        </>
    )
};
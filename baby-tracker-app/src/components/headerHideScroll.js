import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import PropTypes from 'prop-types';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';

const StyledMenu = withStyles({
    paper: {
        border: '1px solid #d3d4d5',
    },
})(props => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}
        {...props}
    />
));

function ElevationScroll(props) {
    const { children } = props;
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

ElevationScroll.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func,
};

export default function HeaderHideScroll(props) {
    const [anchorEl, setAnchorEl] = useState(null);
    const [redirect, setRedirect] = useState(false);
    const [target, setTarget] = useState('');
    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleLogout = (event) => {
        setAnchorEl(event.currentTarget)
        setRedirect(true)
        setTarget('/logout')
    };
    const dashboard = (event) => {
        setAnchorEl(event.currentTarget)
        setRedirect(true)
        setTarget('/dashboard')
    }

    if (redirect) {
        return <Redirect to={{ pathname: target}} />
    } else {
        return (
            <ElevationScroll {...props}>
                <AppBar>
                    <Toolbar>
                        <IconButton edge="start" color="inherit" aria-label="menu">
                            <MenuIcon onClick={handleClick} />
                            <StyledMenu
                                id="simple-menu"
                                anchorEl={anchorEl}
                                keepMounted
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                <MenuItem onClick={dashboard}>Dashboard</MenuItem>
                                <MenuItem onClick={handleLogout}>Logout</MenuItem>
                            </StyledMenu>
                        </IconButton>
                        <Typography variant="h5" component="div">BabyTracker App</Typography>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
        )
    }
}
import React from 'react';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from "@material-ui/core/IconButton";
import withStyles from "@material-ui/core/styles/withStyles";

import MenuIcon from '@material-ui/icons/Menu';

import AppbarStyles from "./AppbarStyles";

const Appbar = (props) => {
    const { classes, handleDrawerToggle, navDrawerOpen } = props;
    return (
        <AppBar
            position="fixed"
            className={navDrawerOpen ? classes.appBarShift : classes.appBar}
        >
            <Toolbar>
                <div className={classes.menuButton}>
                    <IconButton onClick={handleDrawerToggle} className={navDrawerOpen ? classes.hide : classes.menuButton}>
                        <MenuIcon />
                    </IconButton>
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default withStyles(AppbarStyles)(Appbar);

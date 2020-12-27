import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { Link } from "react-router-dom";
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        background: "#175599",
        paddingTop: "30px",
        paddingBottom: "30px",
    },
    title: {
        color: "#ffffff",
        display: "inline-block",
        fontSize: "30px",
    },
    nav: {
        color: "#ffffff",
        textDecoration: "none",
        display: "inline-block",
        paddingLeft: "30px",
        paddingRight: "30px",
        fontSize: "20px",
    },
    grid: {
        textAlign: "right",
    },
}));

export default function Header() {
    const classes = useStyles();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("xs"));

    return (
        <div className={classes.root}>
            <Grid className={classes.grid} container >
                {/* <Grid className={classes.menuButton} item xs={1}>
                    <IconButton color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                </Grid> */}
                <Grid item xs={12} sm={2} >
                    <Link to="/Home">
                        <Button className={classes.title}>React App</Button>
                    </Link>
                </Grid>
                <Grid className={classes.grid} item xs={12} sm={10} >
                    <Link to="/ContactUs">
                        <Button className={classes.nav}>contact</Button>
                    </Link>
                    <Link to="/About">
                        <Button className={classes.nav}>About</Button>
                    </Link>
                    <Link to="/Home">
                        <Button className={classes.nav}>Home</Button>
                    </Link>
                    <Link to="/Search">
                        <Button className={classes.nav}>Search</Button>
                    </Link>
                    <Link to="/Lists">
                        <Button className={classes.nav}>Lists</Button>
                    </Link>
                </Grid>
            </Grid>
        </div>
    );
}

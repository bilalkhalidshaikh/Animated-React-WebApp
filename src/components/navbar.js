import React from "react";
import "./css/navbar.css"
import { makeStyles } from '@material-ui/core/styles';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Diamond from "../images/diamond.png"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: "white"
  },
  title: {
    flexGrow: 1,
    color: "white",
    fontWeight: 600,
    padding: '0%',
    margin: '0%'
  }

}));

export default function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            {/* <img src={Diamond} className="img" /> */}
            Diamond WebApp
          </Typography>
          <Button>Home</Button>
          <Button>About</Button>
          <Button>Services</Button>
          <Button>Contact</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}






















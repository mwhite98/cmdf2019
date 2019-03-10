import React, { Component } from "react";
import "./App.css";
import { withStyles } from "@material-ui/core/styles";
import ChatBox from "./components/ChatBox/ChatBox";
import MenuBar from "./components/MenuBar/MenuBar";
import Grid from "@material-ui/core/Grid";

const styles = {
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 48,
    padding: "0 30px",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)"
  },
  colorPrimary: {
    backgroundColor: "black",
    color: "blue"
  }
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <MenuBar title="OUR APP" />
        <Grid container direction="row" justify="center" alignItems="flex-end">
          <Grid item l={2}>
            {" "}
            what up
          </Grid>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="flex-end"
          >
            what up
            <ChatBox />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(App);

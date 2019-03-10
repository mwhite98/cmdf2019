import React, { Component } from "react";
import "./App.css";
import { withStyles } from "@material-ui/core/styles";

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

/*Images from: https://unboundbabes.com/collections/new-in*/
class App extends Component {
  render() {
    return (
      <div className="App">
      <div id="wrapper">
        <h1 class="chrome">FEM</h1>
        <h3 class="dreams">Power</h3>
      </div>
        <div className="bigCats">
        <div className="starLeft">
          <img src="https://cdn.shopify.com/s/files/1/0314/5521/t/142/assets/swell-stars-left.png?17943732966129732546"
            alt="stars"
            align="left"
            marginwidth="-500px">
          </img>
        </div>
        <div className="starRight">
          <img src="https://cdn.shopify.com/s/files/1/0314/5521/t/142/assets/swell-stars-right.png?17943732966129732546"
            alt="stars"
            align="right"
            marginwidth="-500px">
          </img>
        </div>
        <div className="frameStuff">
          <iframe
            title="chat-bot"
            allow="microphone;"
            width="450"
            height="430"
            align="middle"
            marginwidth="-500"
            src="https://console.dialogflow.com/api-client/demo/embedded/77655267-286d-40bd-b146-c5069370663d">
          </iframe>
          </div>
        </div>
      </div>
    );
  }
}


export default withStyles(styles)(App);

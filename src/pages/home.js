import React, { Component } from "react";
import axios from "axios";
import Grid from "@material-ui/core/Grid";

import Scream from "../components/Scream";

class Home extends Component {
  state = {
    screams: null,
  };

  componentDidMount() {
    axios
      .get("/screams")
      .then((res) => {
        this.setState({
          screams: [res.data],
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    let recentScreamsMarkup = this.state.screams ? (
      this.state.screams[0].map((scream, id) => (
        <Scream key={id} scream={scream} />
      ))
    ) : (
      <p>Loading...</p>
    );

    return (
      <Grid container spacing={4}>
        <Grid item sm={8} xs={12}>
          {recentScreamsMarkup}
        </Grid>
        <Grid item sm={4} xs={12}>
          <p> Profile...</p>
        </Grid>
      </Grid>
    );
  }
}

export default Home;
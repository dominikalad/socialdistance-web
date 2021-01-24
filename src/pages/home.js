import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { getScreams } from "../redux/actions/dataActions";
import ScreamSkeleton from "../util/ScreamSkeleton";
import Scream from "../components/scream/Scream";
import Profile from "../components/profile/Profile";

import Grid from "@material-ui/core/Grid";

class Home extends Component {
  componentDidMount() {
    this.props.getScreams();
  }

  render() {
    const { screams, loading } = this.props.data;
    let recentScreamsMarkup =
      !loading && screams ? (
        screams.map((scream, id) => <Scream key={id} scream={scream} />)
      ) : (
        <ScreamSkeleton />
      );

    return (
      <Grid container spacing={4}>
        <Grid item sm={8} xs={12}>
          {recentScreamsMarkup}
        </Grid>
        <Grid item sm={4} xs={12}>
          <Profile />
        </Grid>
      </Grid>
    );
  }
}

Home.propTypes = {
  getScreams: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  data: state.data,
});

export default connect(mapStateToProps, { getScreams })(Home);

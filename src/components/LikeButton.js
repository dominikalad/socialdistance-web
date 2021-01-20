import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { likeScream, unlikeScream } from "../redux/actions/dataActions";

import ButtonUtil from "../util/ButtonUtil";

import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

export class LikeButton extends Component {
  likedScream = () => {
    if (
      this.props.user.likes &&
      this.props.user.likes.find(
        (like) => like.screamId === this.props.screamId
      )
    ) {
      return true;
    } else {
      return false;
    }
  };

  likeScream = () => {
    this.props.likeScream(this.props.screamId);
  };

  unlikeScream = () => {
    this.props.unlikeScream(this.props.screamId);
  };

  render() {
    const { authenticated } = this.props.user;

    const likeButton = !authenticated ? (
      <Link to="/login">
        <ButtonUtil tip="Like">
          <FavoriteBorderIcon color="primary" />
        </ButtonUtil>
      </Link>
    ) : this.likedScream() ? (
      <ButtonUtil tip="Unlike" onClick={this.unlikeScream}>
        <FavoriteIcon color="primary" />
      </ButtonUtil>
    ) : (
      <ButtonUtil tip="Like" onClick={this.likeScream}>
        <FavoriteBorderIcon color="primary" />
      </ButtonUtil>
    );

    return likeButton;
  }
}

LikeButton.propTypes = {
  user: PropTypes.object.isRequired,
  screamId: PropTypes.string.isRequired,
  likeScream: PropTypes.func.isRequired,
  unlikeScream: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapActionsToProps = {
  likeScream,
  unlikeScream,
};

export default connect(mapStateToProps, mapActionsToProps)(LikeButton);

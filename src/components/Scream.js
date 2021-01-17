import React, { Component } from "react";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { likeScream, unlikeScream } from "../redux/actions/dataActions";
import ButtonUtil from "../util/ButtonUtil";
import DeleteScream from "./DeleteScream";

import withStyles from "@material-ui/core/styles/withStyles";
import ChatIcon from "@material-ui/icons/Chat";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { Card, CardContent, CardMedia, Typography } from "@material-ui/core";

const styles = {
  card: {
    display: "flex",
    marginBottom: "15px",
  },
  image: {
    minWidth: "120px",
  },
  contant: {
    padding: "25px",
  },
};

class Scream extends Component {
  likedScream = () => {
    if (
      this.props.user.likes &&
      this.props.user.likes.find(
        (like) => like.screamId === this.props.scream.screamId
      )
    ) {
      return true;
    } else {
      return false;
    }
  };

  likeScream = () => {
    this.props.likeScream(this.props.scream.screamId);
  };

  unlikeScream = () => {
    this.props.unlikeScream(this.props.scream.screamId);
  };

  render() {
    dayjs.extend(relativeTime);
    const {
      classes,
      scream: {
        body,
        createdAt,
        userImage,
        userHandle,
        screamId,
        likeCount,
        commentCount,
      },
      user: {
        authenticated,
        credentials: { handle },
      },
    } = this.props;

    const likeButton = !authenticated ? (
      <ButtonUtil tip="Like">
        <Link to="/login">
          <FavoriteBorderIcon color="primary" />
        </Link>
      </ButtonUtil>
    ) : this.likedScream() ? (
      <ButtonUtil tip="Unlike" onClick={this.unlikeScream}>
        <FavoriteIcon color="primary" />
      </ButtonUtil>
    ) : (
      <ButtonUtil tip="Like" onClick={this.likeScream}>
        <FavoriteBorderIcon color="primary" />
      </ButtonUtil>
    );

    const deleteButton =
      authenticated && userHandle === handle ? (
        <DeleteScream screamId={screamId} />
      ) : null;

    return (
      <Card className={classes.card}>
        <CardMedia
          className={classes.image}
          image={userImage}
          title="Profile image"
        />
        <CardContent className={classes.content}>
          <Typography
            color="primary"
            component={Link}
            to={`/users/${userHandle}`}
            variant="h5"
          >
            {userHandle}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {dayjs(createdAt).fromNow()}
          </Typography>
          <Typography variant="body1">{body}</Typography>
          {likeButton}
          <span>{likeCount} hearts</span>
          <ButtonUtil tip="comments">
            <ChatIcon color="primary" />
          </ButtonUtil>
          <span>{commentCount} comments</span>
        </CardContent>
        {deleteButton}
      </Card>
    );
  }
}

Scream.propTypes = {
  likeScream: PropTypes.func.isRequired,
  unlikeScream: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  scream: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapActionsToProps = {
  likeScream,
  unlikeScream,
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(withStyles(styles)(Scream));

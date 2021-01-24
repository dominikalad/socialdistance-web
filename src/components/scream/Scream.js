import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

import LikeButton from "./LikeButton";
import ButtonUtil from "../../util/ButtonUtil";
import DeleteScream from "./DeleteScream";
import ScreamDialog from "./ScreamDialog";

import withStyles from "@material-ui/core/styles/withStyles";
import ChatIcon from "@material-ui/icons/Chat";
import { Card, CardContent, CardMedia, Typography } from "@material-ui/core";

const styles = {
  card: {
    display: "flex",
    marginBottom: "15px",
  },
  image: {
    minWidth: "150px",
  },
  content: {
    padding: "25px",
    marginRight: "auto",
  },
};

class Scream extends Component {
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
          <LikeButton screamId={screamId} />
          <span>{likeCount} hearts</span>
          <ButtonUtil tip="comments">
            <ChatIcon color="primary" />
          </ButtonUtil>
          <span>{commentCount} comments</span>
        </CardContent>
        <ScreamDialog
          screamId={screamId}
          userHandle={userHandle}
          openDialog={this.props.openDialog}
        />
        {deleteButton}
      </Card>
    );
  }
}

Scream.propTypes = {
  user: PropTypes.object.isRequired,
  scream: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  openDialog: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, {})(withStyles(styles)(Scream));

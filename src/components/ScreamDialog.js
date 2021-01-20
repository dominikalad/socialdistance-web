import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import dayjs from "dayjs";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { getScream } from "../redux/actions/dataActions";

import LikeButton from "./LikeButton";
import ButtonUtil from "../util/ButtonUtil";

import withStyles from "@material-ui/core/styles/withStyles";
import ChatIcon from "@material-ui/icons/Chat";

import {
  Dialog,
  DialogContent,
  CircularProgress,
  DialogTitle,
  Grid,
  Typography,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import UnfoldMoreIcon from "@material-ui/icons/UnfoldMore";

const styles = {
  invisibleSeparator: {
    border: "none",
    margin: 4,
  },
  profileImage: {
    maxWidth: 200,
    height: 200,
    borderRadius: "50%",
    objectFit: "cover",
  },
  dialogContent: {
    padding: 20,
  },
  closeButton: {
    position: "absolute",
    left: "92%",
  },
  expandButton: {
    alignSelf: "flex-start",
  },
};

class ScreamDialog extends Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({ open: true });
    this.props.getScream(this.props.screamId);
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const {
      classes,
      scream: {
        screamId,
        body,
        createdAt,
        likeCount,
        commentCount,
        userImage,
        userHandle,
      },
      UI: { loading },
    } = this.props;

    const dialogMarkup = loading ? (
      <CircularProgress size={200} />
    ) : (
      <Grid container spacing={16}>
        <Grid item sm={5}>
          <img src={userImage} alt="Profile" className={classes.profileImage} />
        </Grid>
        <Grid item sm={7}>
          <Typography
            component={Link}
            color="primary"
            variant="h5"
            to={`/users/${userHandle}`}
          >
            @{userHandle}
          </Typography>
          <hr className={classes.invisibleSeparator} />
          <Typography variant="body2" color="textSecondary">
            {dayjs(createdAt).format("h:mm a, MMMM DD YYYY")}
          </Typography>
          <hr className={classes.invisibleSeparator} />
          <Typography variant="body1">{body}</Typography>
          <LikeButton screamId={screamId} />
          <span>{likeCount} hearts</span>
          <ButtonUtil tip="comments">
            <ChatIcon color="primary" />
          </ButtonUtil>
          <span>{commentCount} comments</span>
        </Grid>
      </Grid>
    );

    return (
      <Fragment>
        <ButtonUtil
          onClick={this.handleOpen}
          tip="Expand scream"
          tipClassName={classes.expandButton}
        >
          <UnfoldMoreIcon color="primary" />
        </ButtonUtil>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          fullWidth
          maxWidth="sm"
        >
          <ButtonUtil
            tip="Close"
            onClick={this.handleClose}
            tipClassName={classes.closeButton}
          >
            <CloseIcon />
          </ButtonUtil>
          <DialogContent className={classes.dialogContent}>
            {dialogMarkup}
          </DialogContent>
        </Dialog>
      </Fragment>
    );
  }
}

ScreamDialog.propTypes = {
  getScream: PropTypes.func.isRequired,
  screamId: PropTypes.string.isRequired,
  userHandle: PropTypes.string.isRequired,
  scream: PropTypes.object.isRequired,
  UI: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  scream: state.data.scream,
  UI: state.UI,
});

const mapActionsToProps = {
  getScream,
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(withStyles(styles)(ScreamDialog));

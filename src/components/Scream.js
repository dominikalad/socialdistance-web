import React, { Component } from "react";
import Link from "react-router-dom/Link";

import withStyles from "@material-ui/core/styles/withStyles";
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
  render() {
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
    } = this.props;

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
            {createdAt}
          </Typography>
          <Typography variant="body1">{body}</Typography>
        </CardContent>
      </Card>
    );
  }
}

export default withStyles(styles)(Scream);

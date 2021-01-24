export default {
  palette: {
    primary: {
      light: "#ffef62",
      main: "#ffeb3b",
      dark: "#b2a429",
      contrastText: "#000",
    },
    secondary: {
      light: "#fff7b0",
      main: "#fff59d",
      dark: "#b2ab6d",
      contrastText: "#000",
    },
  },
  styles: {
    form: {
      textAlign: "center",
    },
    image: {
      maxWidth: "100px",
    },
    pageTitle: {
      margin: "10px auto",
    },
    textField: {
      margin: "10px auto",
    },
    button: {
      marginTop: "20px",
      position: "relative",
    },
    customError: {
      color: "red",
      fontSize: "0.8rem",
      marginTop: "10px",
    },
    signup: {
      marginTop: "10px",
    },
    progress: {
      position: "absolute",
    },
    paper: {
      padding: 20,
    },
    profile: {
      "& .image-wrapper": {
        textAlign: "center",
        position: "relative",
        "& button": {
          position: "absolute",
          top: "80%",
          left: "70%",
        },
      },
      "& .profile-image": {
        width: 200,
        height: 200,
        objectFit: "cover",
        maxWidth: "100%",
        borderRadius: "50%",
      },
      "& .profile-details": {
        textAlign: "center",
        "& span, svg": {
          verticalAlign: "middle",
        },
        "& a": {
          color: "#ffeb3b",
        },
      },
      "& hr": {
        border: "none",
        margin: "0 0 10px 0",
      },
      "& svg.button": {
        "&:hover": {
          cursor: "pointer",
        },
      },
    },
    buttons: {
      textAlign: "center",
      "& a": {
        margin: "20px 10px",
      },
    },
    card: {
      display: "flex",
      marginBottom: 20,
    },
    cardContent: {
      width: "100%",
      flexDirection: "column",
      padding: 25,
    },
    cover: {
      minWidth: 200,
      objectFit: "cover",
    },
    handle: {
      width: 60,
      height: 20,
      backgroundColor: "#ffeb3b",
      marginBottom: 7,
    },
    date: {
      height: 14,
      width: 100,
      backgroundColor: "rgba(0,0,0,0.2)",
      marginBottom: 10,
    },
    fullLine: {
      height: 15,
      width: "90%",
      backgroundColor: "rgba(0,0,0,0.2)",
      marginBottom: 10,
    },
    halfLine: {
      height: 15,
      width: "45%",
      backgroundColor: "rgba(0,0,0,0.2)",
      marginBottom: 10,
    },
  },
};

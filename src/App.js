import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

import "./App.css";

import Navbar from "./components/Navbar";

import Home from "./pages/home";
import Login from "./pages/login";
import Signup from "./pages/signup";

const theme = createMuiTheme({
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
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <Router>
            <Navbar />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={Signup} />
              </Switch>
            </div>
          </Router>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;

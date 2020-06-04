import React from "react";
import Login from "./login";
import Home from "./Home";
import Create from "./Create";
import "./App.css";
import User from "./User";
import Navigate from "./Navigate";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Image } from "react-bootstrap";
const image = require("./db-logo.png");
function App() {
  return (
    <div className="App">
      <div className="bg">
        <Navigate />
        <Router>
          <Switch>
            <Route
              path="/"
              exact
              component={() => {
                return <Home />;
              }}
            />
            <Route
              path="/user"
              exact
              component={() => {
                return <User />;
              }}
            />
            <Route
              path="/signin"
              component={() => {
                return <Login />;
              }}
            />
            <Route
              path="/signup"
              component={() => {
                return <Create />;
              }}
            />
            <Route
              path="/user"
              component={() => {
                return <User />;
              }}
            />
          </Switch>
        </Router>
      </div>
    </div>
  );
}
export default App;

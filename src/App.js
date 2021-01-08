import React from "react";
import "./App.css";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  useHistory,
} from "react-router-dom";
import Splash from "./Pages/SplashScreen";
import UserAuth from "./Pages/UserAuth";
import UserSignUp from "./Pages/UserSignUp";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Splash} />
        <Route path="/login" component={UserAuth} />
        <Route path="/register" component={UserSignUp} />
      </Switch>
    </Router>
  );
}

export default App;

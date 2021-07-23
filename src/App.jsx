import React from "react";
import HomePage from "./pages/HomePage";
import Cart from "./pages/CartPage/index";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
const App = () => {
  return (
    <div className="container">
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/cart" component={Cart} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  );
};

export default App;

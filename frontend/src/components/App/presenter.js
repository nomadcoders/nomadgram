import React from "react";
import { Route, Switch } from "react-router-dom";
import styles from "./styles.scss";
import Footer from "components/Footer";

const App = props => [
  //Nav,
  props.isLoggedIn ? <PrivateRoutes key={2} /> : <PublicRoutes key={2} />,
  <Footer key={3} />
];

const PrivateRoutes = props => (
  <Switch>
    <Route key="1" exact path="/" render={() => "feed"} />,
    <Route key="2" path="explore" render={() => "explore"} />
  </Switch>
);

const PublicRoutes = props => (
  <Switch>
    <Route exact path="/" render={() => "login"} />,
    <Route path="/recover" render={() => "recover password"} />
  </Switch>
);

export default App;

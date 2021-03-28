import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Blog from "./components/pages/blog/Blog";
import Home from "./components/pages/home/Home";
import ContactUs from "./components/pages/contact-us/ContactUs";
import Help from "./components/pages/help/Help";
import HeaderComponent from "./components/shared/header/Header";
import FooterComponent from "./components/shared/footer/Footer";

class Router extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <HeaderComponent />
          <Switch >
            <Route exact path="/" component={Blog} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/contact-us" component={ContactUs} />
            <Route exact path="/help" component={Help} />
          </Switch>
        <FooterComponent />
      </BrowserRouter>
    );
  }
}

export default Router;

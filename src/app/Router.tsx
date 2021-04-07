import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Blog from "./components/pages/blog/Blog";
import Home from "./components/pages/home/Home";
import ContactUs from "./components/pages/contact-us/ContactUs";
import Help from "./components/pages/help/Help";
import Layout from "./components/shared/layout/Layout";
import NotFound from "./components/pages/not-found/NotFound";

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Blog} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/contact-us" component={ContactUs} />
          <Route exact path="/help" component={Help} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;

import React from "react";
import { Route, Switch } from "react-router";
import Blog from "./Blog";
import Contact from "./Contact";
import About from "./About";
import Post from "./Post";

export default function Body() {
  return (
    <Switch>
      <Route path="/" exact component={Blog} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/post/:slug" component={Post} />
    </Switch>
  );
}

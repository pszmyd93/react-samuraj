import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Admin from "../pages/Admin";
import Products from "../pages/Products";
import Contact from "../pages/Contact";
import ErrorPage from "../pages/ErrorPage";
const Page = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/admin" component={Admin} />
        <Route path="/products" component={Products} />
        <Route path="/contact" component={Contact} />
        <Route component={ErrorPage} />
      </Switch>
    </>
  );
};
export default Page;

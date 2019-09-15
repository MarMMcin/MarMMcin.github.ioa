import React from "react";
import { Route, Switch } from "react-router-dom";
import "../styles/Page.css";

import AboutMe from "../pages/AboutMe";

import MyProjects from "../pages/MyProjects";
import ContactPage from "../pages/ContactPage";
import MySkills from "../pages/MySkills.";

const Page = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact component={AboutMe} />
        <Route path="/products" component={MyProjects} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/skils" component={MySkills} />

        {/* <Route component={ErrorPage} /> */}
      </Switch>
      {/*k*/}
    </>
  );
};

export default Page;

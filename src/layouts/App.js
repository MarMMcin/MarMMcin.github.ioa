import React, { Component } from "react";
import "../styles/App.css";
import { BrowserRouter as Router } from "react-router-dom";
// import Footer from "../layouts/Footer";
import Navigation from "./Navigation";
import Page from "./Page";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="navigation_links">
          <ul className="navigation_app">{<Navigation />}</ul>
          <main>
            <section className="page">{<Page />}</section>
          </main>
          {/* <footer>{<Footer />}</footer> */}
        </div>
      </Router>
    );
  }
}

export default App;

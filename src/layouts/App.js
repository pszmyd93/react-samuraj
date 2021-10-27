import React, { Component } from "react";
import "../styles/App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Navigation from "./Navigation";
import Page from "./Page";

class App extends Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div className="wrapper">
          <header className="header">{<Header />}</header>
          <main className="mainContent">
            <aside className="navigation">{<Navigation />}</aside>
            <section className="currentPage">{<Page />}</section>
          </main>
          <footer className="footer">{<Footer />}</footer>
        </div>
      </Router>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
        <div className="container">
          <Link className="navbar-brand js-scroll-trigger" to="/">Travis John</Link>
          <button className="navbar-toggler navbar-toggler-right text-uppercase font-weight-bold bg-primary rounded" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            Menu
            <i className="fas fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
            <li className="nav-item mx-0 mx-lg-1 dropdown">
              <Link className="nav-link py-3 px-0 px-lg-3 rounded dropdown-toggle" to="#" id="navbar-dropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Portfolio</Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link className="dropdown-item js-scroll-trigger" to="#portfolio">Showcase</Link>
                <div className="dropdown-divider"></div>
                <Link className="dropdown-item" to="../design">Design Projects</Link>
                <div className="dropdown-divider"></div>
                <Link className="dropdown-item" to="../development">Development Projects</Link>
                </div>
              </li>
              <li className="nav-item mx-0 mx-lg-1">
                <a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;

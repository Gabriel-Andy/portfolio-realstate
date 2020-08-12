import React, { Component } from "react";
import Logo from "./Logo";
import NavBar from "./NavBar";
import Slider from "./Slider";

export default class Header extends Component {
  state = {
    investor:"investor",
    properties:"properties",
    agent:"agent",
    logo:"logo",
    search:"search",
    account:"account",
    menu:"menu"
  };
  render() {
    return (
      <>
        <header>
          <div className="container-nav">
            <Logo title={this.state} />
            <NavBar title = {this.state} />
          </div>
        </header>
        <Slider />
      </>
    );
  }
}

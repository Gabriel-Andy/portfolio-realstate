import React, { Component } from "react";
import Logo from "./Logo";
import NavBar from "./NavBar";
import Slider from "./Slider";

export default class Header extends Component {
  state = {
    investor:"investor",
    properties:"properties",
    agent:"agent",
    search:"search",
    account:"account",
    menu:"menu",
    open:false
  };
 
  handleSearch = ()=>{
    console.log("I am developer")
    this.setState({
      open:!this.state.open
    })
  }
  render() {
    return (
      <>
        <header>
          <div className="container-nav">
            <Logo title={this.state} />
            <NavBar title = {this.state} handleSearch = {this.handleSearch}   />
          </div>
        </header>
        <Slider />
      </>
    );
  }
}

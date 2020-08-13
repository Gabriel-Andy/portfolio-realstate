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
    isOpen:false
  };
 
handleToggle = (id)=>{
  this.setState({
    isOpen:!this.state.isOpen
  },() =>{
    console.log("I am a developer")
  })
}
  render() {
    return (
      <>
        <header>
          <div className="container-nav">
            <Logo title={this.state} />
            <NavBar title = {this.state} handleSearch = {this.handleToggle}   />
          </div>
        </header>
        <Slider title = {this.state} />
      </>
    );
  }
}

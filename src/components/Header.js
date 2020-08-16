import React, { Component } from "react";
import Logo from "./Logo";
import NavBar from "./NavBar";
import Slider from "./Slider";
import uuid from "react-uuid";
import { FaSearch, FaUser, FaBars, FaWindowClose } from "react-icons/fa";

export default class Header extends Component {
  state = {
    logo: ["investor", "properties", "agent"],
    isOpen: false,
    navbar: [
      {
        name: "search",
        id: uuid(),
        icon: FaSearch,
        defaultIcon: FaWindowClose,
      },
      {
        name: "account",
        id: uuid(),
        icon: FaUser,
        defaultIcon: FaWindowClose,
      },
      {
        name: "menu",
        id: uuid(),
        icon: FaBars,
        defaultIcon: FaWindowClose,
      },
    ],
  };

  handleToggle = () => {
    this.setState((prev) => {
      return {
        isOpen: !prev.isOpen,
      };
    });
  };

  render() {
    return (
      <>
        <header>
          <div className="container-nav">
            <Logo title={this.state} />
            <NavBar
              title={this.state}
              handleSearch={() => this.handleToggle(this.state.navbar.id)}
            />
          </div>     
        </header>
        <Slider title={this.state} />
      </>
    );
  }
}


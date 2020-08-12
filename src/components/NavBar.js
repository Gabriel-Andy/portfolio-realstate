import React from "react";
import { FaSearch, FaUser, FaBars } from "react-icons/fa";

export default function NavBar({ title }) {
  const { search, account, menu } = title;
  return (
    <nav className="nav-menu">
      <ul data-tab="1">
        <li>
          <span>
            <FaSearch className="icon" />
          </span>
        </li>
        <li>{search}</li>
      </ul>
      <ul data-tab="2">
        <li>
          <span>
            <FaUser className="icon" />
          </span>
        </li>
        <li>{account}</li>
      </ul>
      <ul data-tab="3">
        <li>
          <span id="menu">
            <FaBars className="icon" />
          </span>
        </li>
        <li>{menu}</li>
      </ul>
    </nav>
  );
}

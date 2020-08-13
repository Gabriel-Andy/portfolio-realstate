import React from "react";
import { FaSearch, FaUser, FaBars, FaWindowClose } from "react-icons/fa";

export default function NavBar({ title, handleSearch }) {
  const { search, account, menu, isOpen } = title;
  return (
    <nav className="nav-menu">
      <ul data-tab="1" onClick={handleSearch}>
        <li>
          <span>
            {isOpen ? (
              <FaWindowClose className="icon" />
            ) : (
              <FaSearch className="icon" />
            )}
          </span>
        </li>
        <li>{search}</li>
      </ul>
      <ul data-tab="2" onClick={handleSearch}>
        <li>
          <span>
            {isOpen ? (
              <FaWindowClose className="icon" />
            ) : (
              <FaUser className="icon" />
            )}
          </span>
        </li>
        <li>{account}</li>
      </ul>
      <ul data-tab="3" onClick={handleSearch}>
        <li>
          <span id="menu">
            {isOpen ? (
              <FaWindowClose className="icon" />
            ) : (
              <FaBars className="icon" />
            )}
          </span>
        </li>
        <li>{menu}</li>
      </ul>
    </nav>
  );
}

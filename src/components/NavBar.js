import React from "react";

export default function NavBar({ title, handleSearch }) {
  const { navbar, isOpen } = title;
  return (
    <nav className="nav-menu">
      {navbar.map((ul) => {
        return (
          <ul key={ul.id} onClick={handleSearch}>
            <li>
              <span>
                {isOpen ? (
                  <ul.defaultIcon className="icon" />
                ) : (
                  <ul.icon className="icon" />
                )}
              </span>
            </li>
            <li>{ul.name}</li>
          </ul>
        );
      })}
    </nav>
  );
}

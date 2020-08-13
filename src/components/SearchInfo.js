import React from "react";

export default function SearchInfo() {
  return (
    <section id="search-info" >
      <div className="search">
        <input
          type="text"
          id="search-address"
          placeholder="Search by Address, City, Zip, and "
        />
        <span>More</span>
        <div className="content-add">
          <h5>additionnal search fields</h5>
          <p>
            neighborhood, subdivision <br />
            street name or School district
          </p>
        </div>
      </div>
    </section>
  );
}

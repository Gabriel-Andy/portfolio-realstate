import React from "react";

export default function Logo({ title }) {
  const [investor, properties, agent] = title.logo;
  return (
    <>
      <div className="logo">
        <h2>{investor}</h2>
        <ul>
          <li>{properties}</li>
          <li>{agent}</li>
        </ul>
      </div>
    </>
  );
}

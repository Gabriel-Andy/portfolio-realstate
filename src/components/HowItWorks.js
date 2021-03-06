import React from "react";

export default function HowItWorks({title}) {
  return (
    <div>
      <section className={title.isOpen ? " how-it-works openSlider" : "how-it-works"}>
        <div className="get-started">
          <ul>
            <li>
              <span>buy</span>
            </li>
            <li>
              <a href="#">property search</a>
            </li>
            <li>
              <a href="#">buyer's guide</a>
            </li>
            <li>
              <a href="#">mobile app</a>
            </li>
          </ul>
          <ul>
            <li>
              <span>sell</span>
            </li>
            <li>
              <a href="#">home value estimates</a>
            </li>
            <li>
              <a href="#">seller's guide</a>
            </li>
          </ul>
          <ul>
            <li>
              <span>resources</span>
            </li>
            <li>
              <a href="#">offices search</a>
            </li>
            <li>
              <a href="#">account benefits</a>
            </li>
            <li>
              <a href="#">agent search</a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

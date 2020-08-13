import React from "react";
import SearchInfo from "./SearchInfo";
import HowItWorks from "./HowItWorks";
import Registration from "./Registration";

export default function Slider({title}) {
  return (
    <>
      <SearchInfo title={title} />
      <Registration title={title} />
      <HowItWorks title={title} />
    </>
  );
}

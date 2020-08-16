import React from "react";
import SearchInfo from "./SearchInfo";
import HowItWorks from "./HowItWorks";
import Registration from "./Registration";

export default function Slider({ title }) {
  return (
    <>
      <HowItWorks title={title} />

      <Registration title={title} />
      <SearchInfo title={title} />
    </>
  );
}

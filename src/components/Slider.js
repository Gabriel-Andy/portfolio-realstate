import React, {Component} from "react";
import SearchInfo from "./SearchInfo";
import HowItWorks from "./HowItWorks";
import Registration from "./Registration";

export default class Slider extends Component {
  state = {
    open:false
  }
  render() {
    return (
      <>
        <SearchInfo />
        <Registration />
        <HowItWorks />
      </>
    );
  }
}

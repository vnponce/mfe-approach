import React from "react";
import { BrowserRouter } from "react-router-dom";
import MarketingApp from "./components/MarketingApp";

export default () => {
  return <BrowserRouter>
    <h1>Hi there!</h1>
    <hr/>
    <MarketingApp />
  </BrowserRouter>
}
import { useState } from "react";
import Heroes from "../components/Layout/Heroes";
import Arrow from "../components/UI/arrow/Arrow";
import HomeSection1 from "../components/PageContent/HomeSection1";
import HomeSection2 from "../components/PageContent/HomeSection2";

function HomePage(props) {
  return (
    <>
      <Heroes />

      <div className="container">
        <HomeSection1 />
      </div>
      <div className="container">
        <HomeSection2 />
      </div>
         
    </>
  );
}

export default HomePage;

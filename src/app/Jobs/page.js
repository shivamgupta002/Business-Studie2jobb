import React from "react";
import Header from "../_components/Header";

import MiniHero from "../_components/MiniHero.jsx";

const Jobs = () => {
  return (
    <>
      <Header />
      <MiniHero
        subHeading={"Home"}
        subHeading2={"About"}
        heading={"Browse Jobs"}
      />
    </>
  );
};

export default Jobs;

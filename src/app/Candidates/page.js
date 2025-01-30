import React from "react";
import Header from "../_components/Header";
import MiniHero from "../_components/MiniHero.jsx";

const Candidates = () => {
  return (
    <>
      <Header />
      <MiniHero
        subHeading={"Home"}
        subHeading2={"Candidates"}
        heading={"Hire Your Best Candidates"}
      />
    </>
  );
};

export default Candidates;

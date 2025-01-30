import React from "react";
import Header from "../_components/Header";
import MiniHero from "../_components/MiniHero.jsx";

const Post_Jobs = () => {
  return (
    <>
      <Header />
      <MiniHero
        subHeading={"Home"}
        subHeading2={"JOB POST"}
        heading={"Post A Job"}
      />
    </>
  );
};

export default Post_Jobs;

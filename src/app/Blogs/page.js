import React from "react";
import Header from "../_components/Header";
import MiniHero from "../_components/MiniHero.jsx";

const Blogs = () => {
  return (
    <>
      <Header />
      <MiniHero
        subHeading={"Home"}
        subHeading2={"BLOG"}
        heading={"Our Blog"}
      />
    </>
  );
};

export default Blogs;

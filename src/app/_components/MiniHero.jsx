"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../_css/MiniHero.css";

const Hero = ({ heading, subHeading, subHeading2 }) => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className="bg_hero">
            <div className="bg_color">
                <p className="content" data-aos="fade-up">
                    {subHeading} &gt;
                    <span>
                        {subHeading2}
                    </span>
                </p>
                <h1 className="hero_h1" data-aos="fade-up">
                    {heading}
                </h1>
            </div>
        </div>
    );
};

export default Hero;

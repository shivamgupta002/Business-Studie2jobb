"use client";
import React, { useEffect, useState } from "react";
import "../_css/Hero.css";
import PublicIcon from "@mui/icons-material/Public";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import WorkIcon from '@mui/icons-material/Work';
import BadgeIcon from "@mui/icons-material/Badge";
import AOS from "aos";
import "aos/dist/aos.css";
import CountUp from "react-countup";

const Hero = () => {
  const [startCounting, setStartCounting] = useState(false);
  const [activeTab, setActiveTab] = useState("job");

  useEffect(() => {
    AOS.init({
      duration: 2500,
      once: true,
    });

    setTimeout(() => {
      setStartCounting(true);
    }, 1500);
  }, []);

  return (
    <div className="bg_hero">
      <div className="bg_color">
        <p className="content" data-aos="fade-up">
          Find Job, Employment, and Career Opportunities
        </p>
        <h1 className="hero_h1" data-aos="fade-up">
          The Easiest Way to Get Your New Job
        </h1>

        <div className="hero_stats" data-aos="fade-up">
          <div className="stats_1">
            <PublicIcon className="hero_img" sx={{ fontSize: "4rem" }} />
            <div className="hero_figure">
              <h2 className="data">
                {startCounting && <CountUp start={1} end={46} duration={3} />}
              </h2>
              <p>Countries</p>
            </div>
          </div>
          <div className="stats_1">
            <LocationCityIcon className="hero_img" sx={{ fontSize: "4rem" }} />
            <div className="hero_figure">
              <h2 className="data">
                {startCounting && <CountUp start={1} end={450} duration={3} />}
              </h2>
              <p>Companies</p>
            </div>
          </div>
          <div className="stats_1">
            <BadgeIcon className="hero_img" sx={{ fontSize: "3.7rem" }} />
            <div className="hero_figure">
              <h2 className="data">
                {startCounting && <CountUp start={1} end={80000} duration={3} />}
              </h2>
              <p>Active Employees</p>
            </div>
          </div>
        </div>

        <div className="search_section">
          <div className="tabs">
            <button
              className={`tab ${activeTab === "job" ? "active" : ""}`}
              onClick={() => setActiveTab("job")}
            >
              Find a Job
            </button>
            <button
              className={`tab ${activeTab === "candidate" ? "active" : ""}`}
              onClick={() => setActiveTab("candidate")}
            >
              Find a Candidate
            </button>
          </div>

          {/* <div className="searchBox">
            <div className="job">
              <WorkIcon className="icon" />
              <input type="text" placeholder="eg. Graphic, Web Developer" />
            </div>
            <select>
              <option disabled value="">Category</option>
              <option>Full Time</option>
              <option>Part Time</option>
              <option>Freelance</option>
              <option>Internship</option>
            </select>
            <input type="text" placeholder="Location" className="location_input" />
            <button className="searchButton">Search</button>
          </div> */}
          <div className="searchBox">
            {activeTab === "job" ? (
              <>
                <div className="job">
                  <WorkIcon className="icon" />
                  <input type="text" placeholder="eg. Graphic, Web Developer" />
                </div>
                <select defaultValue="">
                  <option disabled value="">Category</option>
                  <option>Full Time</option>
                  <option>Part Time</option>
                  <option>Freelance</option>
                  <option>Internship</option>
                </select>
                <input type="text" placeholder="Location" className="location_input" />
              </>
            ) : (
              <>
                <div className="job">
                  <BadgeIcon className="icon" />
                  <input type="text" placeholder="eg. Name, Skills" />
                </div>
                <select defaultValue="">
                  <option disabled value="">Industry</option>
                  <option>IT</option>
                  <option>Marketing</option>
                  <option>Healthcare</option>
                  <option>Education</option>
                </select>
                <input type="text" placeholder="Location" className="location_input" />
              </>
            )}
            <button className="searchButton">Search</button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;

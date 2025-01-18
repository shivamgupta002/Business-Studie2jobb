"use client";
import React, { useState, useEffect } from "react";
import "../_css/Header.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleDrawer = () => setDrawerOpen((prev) => !prev);

  const handleScroll = () => {
    if (window.scrollY > 20) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Header */}
      <header
        className={`header ${scrolled ? "scrolled" : ""}`}
        data-aos="fade-up"
      >
        <div className={`logo ${scrolled ? "logo_black" : "logo_white"}`}>Studie2Jobb</div>
        <div className="hamburger-menu" onClick={toggleDrawer}>
          ☰
        </div>
        <nav className="nav-menu">
          <a href="/">Home</a>
          <a href="/Jobs">Browse a Jobs</a>
          <a href="/Candidates">Candidates</a>
          <a href="/Blogs">Blog</a>
          <a href="/Contacts">Contact</a>
          <a href="/Post_Jobs">
            <button className="button post_button">Post a Job</button>
          </a>
          <a href="/Get_Jobs">
            <button className="button want_button">Want a Job</button>
          </a>
        </nav>
      </header>

      {/* Mobile Drawer */}
      {drawerOpen && (
        <div className="mobile-drawer">
          <div className="drawer-header">
            <button className="close-button" onClick={toggleDrawer}>
              ✕
            </button>
          </div>
          <div className="drawer-content">
            <div className="drawer-item">
              <a href="/" onClick={toggleDrawer}>
                Home
              </a>
            </div>
            <div className="drawer-item">
              <a href="/Jobs" onClick={toggleDrawer}>
                Browse a Job
              </a>
            </div>
            <div className="drawer-item">
              <a href="/recruiter" onClick={toggleDrawer}>
                Recruiters
              </a>
            </div>
            <div className="drawer-item">
              <a href="/Candidates" onClick={toggleDrawer}>
                Candidates
              </a>
            </div>
            <div className="drawer-item">
              <a href="/Blogs" onClick={toggleDrawer}>
                Blog
              </a>
            </div>
            <div className="drawer-item">
              <a href="/Contacts" onClick={toggleDrawer}>
                Contact
              </a>
            </div>
            <div className="drawer-item">
              <a href="/Post_Jobs">
                <button className="button post_button">Post a Job</button>
              </a>
            </div>
            <div className="drawer-item">
              <a href="/Get_Jobs">
                <button className="button want_button">Want a Job</button>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;

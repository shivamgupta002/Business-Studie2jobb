"use client"
import React, { useState } from "react";
import "../css/Header.css"; 

const Home = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);

  const openLogin = () => setIsLogin((prev) => !prev);
  const openSignUp = () => setIsSignUp((prev) => !prev);

  // Toggles the Drawer open/close
  const toggleDrawer = () => setDrawerOpen((prev) => !prev);

  return (
    <>
      {/* Header */}
      <header className="header">
        <div className="logo">Studie2Jobb</div>
        <div className="hamburger-menu" onClick={toggleDrawer}>
          ☰
        </div>
        <nav className="nav-menu">
          <a href="/">Home</a>
          <a href="/Jobs">Browse a Jobs</a>
          <a href="/Candidates">Candidates</a>
          <a href="/Blogs">Blog</a>
          <a href="/Contacts">Contact</a>
        </nav>
        <div className="auth-buttons">
          <button className="signup-button" onClick={openSignUp}>
            SignUp
          </button>
          <button className="login-button" onClick={openLogin}>
            Login
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {drawerOpen && (
        <div className="mobile-drawer">
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
          <div className="drawer-item" onClick={() => { toggleDrawer(); openSignUp(); }}>
            Register
          </div>
          <div className="drawer-item" onClick={() => { toggleDrawer(); openLogin(); }}>
            Sign In
          </div>
        </div>
      )}

      {/* Modals */}
      {isLogin && <div className="modal">Login Form Here</div>}
      {isSignUp && <div className="modal">SignUp Form Here</div>}
    </>
  );
};

export default Home;

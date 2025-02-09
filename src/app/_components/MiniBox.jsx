"use client";
import React, { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ComputerIcon from "@mui/icons-material/Computer";
import SchoolIcon from "@mui/icons-material/School";
import BrushIcon from "@mui/icons-material/Brush";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import "../_css/MiniBox.css";

const jobCategories = [
    { title: "Website & Software", icon: <ComputerIcon fontSize="large" />, color: "#0066FF" },
    { title: "Education & Training", icon: <SchoolIcon fontSize="large" />, color: "#FFA500" },
    { title: "Graphic & UI/UX Design", icon: <BrushIcon fontSize="large" />, color: "#0000FF" },
    { title: "Accounting & Finance", icon: <AccountBalanceIcon fontSize="large" />, color: "#008080" },
    { title: "Restaurant & Food", icon: <RestaurantIcon fontSize="large" />, color: "#FF4500" },
    { title: "Health & Hospital", icon: <LocalHospitalIcon fontSize="large" />, color: "#00BFFF" },
];

const MiniBox = () => {
    const miniBoxRef = useRef(null);
    const [aosInitialized, setAosInitialized] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !aosInitialized) {
                    AOS.init({ duration: 1500, once: true });
                    setAosInitialized(true);
                }
            },
            { threshold: 0.2 } 
        );

        if (miniBoxRef.current) {
            observer.observe(miniBoxRef.current);
        }

        return () => {
            if (miniBoxRef.current) {
                observer.unobserve(miniBoxRef.current);
            }
        };
    }, [aosInitialized]);

    return (
        <div className="miniBox-container" ref={miniBoxRef}>
            <h2 className="miniBox-title" data-aos="fade-up">Job Categories</h2>
            <div className="miniBox-grid" data-aos="fade-up">
                {jobCategories.map((category, index) => (
                    <div
                        key={index}
                        className="miniBox-item"
                        style={{ borderLeft: `5px solid ${category.color}` }}
                        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = category.color)}
                        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "white")}
                    >
                        <div className="miniBox-icon" style={{ color: category.color }}>
                            {category.icon}
                        </div>
                        <h3 className="miniBox-heading">{category.title}</h3>
                        <p className="miniBox-text">143 Open Positions</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MiniBox;

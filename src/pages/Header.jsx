import React from "react";
import { ArrowLeft } from "lucide-react";
import "./css/header.css";

const Header = ({ darkMode }) => {
  const buttons = [
    { label: "JEE Main Test series", w: 118 },
    { label: "Quizrr Part Test", w: 91 },
    { label: "Quizrr Part Test (QPT) - 1(Old)", w: 177 },
    { label: "Analysis", w: 49 },
    { label: "Leaderboard", w: 74 },
  ];

  return (
    <div className={`header-container ${darkMode ? "dark-mode" : ""}`}>
      <div className="header-left">
        <ArrowLeft size={32} className="header-icon" />
        <p className="header-title">LeaderBoard</p>
      </div>
      <div className="header-buttons">
        {buttons.map((btn, index) => (
          <React.Fragment key={btn.label}>
            <span className="header-btn" style={{ width: `${btn.w}px` }}>
              {btn.label}
            </span>
            {index < buttons.length - 1 && <span className="header-sep">/</span>}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Header;

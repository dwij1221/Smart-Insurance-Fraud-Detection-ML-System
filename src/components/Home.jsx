import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/form");
  };

  return (
    <div className="home-wrapper">
      <div className="home-hero-upgrade">
        <h1 className="home-title-upgrade">🚗 Smart Insurance Fraud Detector</h1>
        <p className="home-subtitle-upgrade">
          Evaluate your insurance claim risk in seconds using our intelligent fraud scoring system.
        </p>

        <ul className="feature-list-upgrade">
          <li>🔎 AI-Powered Claim Risk Analysis</li>
          <li>📊 Real-Time Policy Evaluation</li>
          <li>💡 Instant Decision Suggestions (Approve / Review / Flag)</li>
          <li>🌐 Deployed via FastAPI + React</li>
        </ul>

        <button className="start-button-upgrade" onClick={handleStart}>
          🚀 Start Prediction
        </button>
      </div>

      <footer className="home-footer">
        Built with ❤️ by Dwij | SmartClaimAI 2025
      </footer>
    </div>
  );
};

export default Home;

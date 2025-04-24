import { useState } from "react";
import { motion } from "framer-motion";
import dummyData from "../../data/dummyData";
import "./hero-section.css";

const HeroSection = () => {
  const [data, setData] = useState(dummyData[0]);

  const regenerate = () => {
    const randomIndex = Math.floor(Math.random() * dummyData.length);
    setData(dummyData[randomIndex]);
  };

  const handleInput = (key, value) => {
    setData(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1
          contentEditable
          suppressContentEditableWarning
          onBlur={(e) => handleInput("headline", e.target.innerText)}
          className="hero-headline"
        >
          {data.headline}
        </h1>
        <p
          contentEditable
          suppressContentEditableWarning
          onBlur={(e) => handleInput("subheadline", e.target.innerText)}
          className="hero-subheadline"
        >
          {data.subheadline}
        </p>
        <motion.button
          whileTap={{ scale: 0.95 }}
          className="hero-button"
        >
          {data.cta}
        </motion.button>
        <button
          onClick={regenerate}
          className="regenerate-button"
        >
          <span className="regenerate-icon">🔄</span>
          <span>Regenerate with AI</span>
        </button>
      </div>
      <div className="hero-image-container">
        <img
          src={data.image}
          alt="Hero"
          className="hero-image"
        />
      </div>
    </div>
  );
}

export default HeroSection;


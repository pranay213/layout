import React, { useEffect } from "react";
import "./RainFlow.css";

const RainFlow = (props) => {
  const { stylenew, index } = props;

  useEffect(() => {
    const rainContainer = document.querySelector(`.rain-${index}`);
    const dropCount = 100;

    const createRaindrops = () => {
      for (let i = 0; i < dropCount; i++) {
        const drop = document.createElement("div");
        drop.className = "drop";
        drop.style.left = `${Math.random() * 100}%`;
        drop.style.animationDelay = `${Math.random()}s`;
        rainContainer.appendChild(drop);
      }
    };

    createRaindrops();

    return () => {
      // Cleanup function to remove drops when component unmounts
      rainContainer.innerHTML = "";
    };
  }, [index]);

  return (
    <div className={`rain absolute rain-${index} `} style={stylenew}></div>
  );
};

export default RainFlow;

import { Controls, Player } from "@lottiefiles/react-lottie-player";
import React from "react";

const Rain = () => {
  return (
    <>
      <Player
        autoplay
        loop
        src={require("../Components/animations/rain.json")}
        style={{ height: "100px", width: "50px" }}
        className={`absolute  left-[52%] top-[58.9%]`}
      ></Player>

      {/* <Player
        autoplay
        loop
        src={require("../Components/animations/rain2.json")}
        style={{ height: "100px", width: "50px" }}
        className={`absolute -rotate-90 left-[51.8%] top-[58%]`}
      ></Player> */}
    </>
  );
};

export default Rain;

import React from "react";
import Preloader from "./Preloader";
import "./preloader.scss";

const PreloaderPage = () => {
  return (
    <>
      <Preloader />
      <div className="container">
        <div className="dot rotateX" />
        <div className="pulse rotateX" />
      </div>
    </>
  );
};

export default PreloaderPage;

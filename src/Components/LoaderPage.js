import React from "react";
import { ClockLoader, HashLoader } from "react-spinners";

const LoaderPage = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <HashLoader color="#36d7b7" />

      <p style={{ marginLeft: 10 }}>Open Farm is Loading</p>
    </div>
  );
};

export default LoaderPage;

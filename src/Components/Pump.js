import * as React from "react";
const Pump = (props) => (
  <svg
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 10 10"
    xmlSpace="preserve"
    width={10}
    height={10}
    {...props}
  >
    <path
      style={{
        fill: "#B3260A",
      }}
      cx={16}
      cy={16}
      r={11}
      d="M8.438 5A3.438 3.438 0 0 1 5 8.438A3.438 3.438 0 0 1 1.563 5A3.438 3.438 0 0 1 8.438 5z"
    />
  </svg>
);
export default Pump;

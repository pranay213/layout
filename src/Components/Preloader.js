import * as React from "react";
const Preloader = (props) => (
  <svg
    className="animated-svg"
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="#000"
    {...props}
  >
    <path
      d="M1 6v16l7-4 8 4 7-4V2l-7 4-8-4-7 4m7-4v16m8-12v16"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default Preloader;

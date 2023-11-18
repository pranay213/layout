import * as React from "react";
const Hamburger = (props) => (
  <svg
    width="20px"
    height="20px"
    viewBox="0 0 0.4 0.4"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <path d="M0 0.025h0.4v0.05H0V0.025z" />
    <path d="M0 0.125h0.4v0.05H0V0.125z" />
    <path d="M0 0.225h0.4v0.05H0V0.225z" />
    <path d="M0 0.325h0.4v0.05H0v-0.05z" />
  </svg>
);
export default Hamburger;

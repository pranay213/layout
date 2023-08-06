import * as React from "react";
const Valve = (props) => (
  <svg
    width={15}
    height={15}
    viewBox="0 0 32 47"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M30.6653 1.14288L16.0614 22.2856L1.39779 1.18431L30.6653 1.14288Z"
      fill={props.fill}
      stroke="black"
    />
    <path
      d="M1.64382 46.1575L16.0795 24.8996L30.9101 45.8839L1.64382 46.1575Z"
      fill={props.fill}
      stroke="black"
    />
    <circle
      cx={16.0713}
      cy={24.0217}
      r={4.5}
      transform="rotate(-0.535649 16.0713 24.0217)"
      fill={props.fill}
      stroke="black"
    />
    <line x1={20.0664} y1={23.4843} x2={26.0662} y2={23.4282} stroke="black" />
    <line x1={26.5147} y1={17.9238} x2={26.6176} y2={28.9233} stroke="black" />
  </svg>
);
export default Valve;

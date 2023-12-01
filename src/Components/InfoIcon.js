import * as React from "react";
const InfoIcon = (props) => (
  <svg
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 40 40"
    enableBackground="new 0 0 32 32"
    xmlSpace="preserve"
    width={30}
    height={30}
    {...props}
  >
    <path x={15} y={14} width={2} height={8} d="M18.75 17.5h2.5v10h-2.5v-10z" />
    <path
      x={15}
      y={10}
      width={2}
      height={2}
      d="M18.75 12.5h2.5V15h-2.5V12.5z"
    />
    <path
      fill="none"
      stroke="#000000"
      strokeWidth={2.5}
      strokeMiterlimit={10}
      cx={16}
      cy={16}
      r={12}
      d="M35 20a15 15 0 0 1 -15 15A15 15 0 0 1 5 20a15 15 0 0 1 30 0z"
    />
  </svg>
);
export default InfoIcon;

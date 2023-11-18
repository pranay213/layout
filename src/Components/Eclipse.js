import React from "react";

const Eclipse = (props) => {
  const { item, dripState } = props;
  return (
    <div className="eclipse" style={{ ...item }}>
      <div className={dripState ? "liquid-eclipse" : ""}></div>
    </div>
  );
};

export default Eclipse;

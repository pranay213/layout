import React from "react";

const Eclipse = (props) => {
  const { item } = props;
  return (
    <div className="eclipse" style={{ ...item }}>
      <div className="liquid-eclipse"></div>
    </div>
  );
};

export default Eclipse;

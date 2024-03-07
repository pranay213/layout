import React from "react";
import { useEffect } from "react";
import layout from "../images/courtyard3-min.webp";

const Layout2 = (props) => {
  const { setLoading } = props;
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <div className="w-[100%] h-[100vh]">
      <div></div>
      <div
        className="w-[100%] h-[100vh] bg-image-class "
        style={{ backgroundImage: `url(${layout})` }}
      ></div>
    </div>
  );
};

export default Layout2;

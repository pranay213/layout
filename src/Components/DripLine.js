// import { styled } from "styled-components";

import { useEffect, useState } from "react";
import styled from "styled-components";
// import "./drip-line.module.scss";
// const DripLine = styled.div`
//   width: 12.2%;
//   height: 0.25px;
//   position: absolute !important;
//   top: 82.2%;
//   background-color: rgb(246, 188, 23);
//   transform: rotate(16deg);
//   left: 49%;
//   border-radius: 5px;
// `;

const Liquid = styled.div`
  position: relative;
  width: 2%;
  right: -99%;
  height: 0.1px !important;
  // background-color: (27, 158, 229, 0.75);
  background-color: rgba(27, 158, 300, 01);
  //   background-color: red;
  animation: drip 1s infinite;
  border-radius: 10px;
`;
// animation: ${(props) =>
//   props.delay
//     ? `drip 0.5s linear ${props.delay}s 1 forwards`
//     : "drip 1s infinite"};

const DripLine = (props) => {
  const { item } = props;
  console.log("new-item", item);
  const [left1, setLeft1] = useState();
  const [left2, setLeft2] = useState();

  useEffect(() => {
    let newval = item.left.replace(/%/g, "");
    let newval1 = parseFloat(Number(newval) - 0.4) + "%";
    let newval2 = parseFloat(Number(newval) + 0.4) + "%";

    console.log("newval", newval, "newval1", newval1, "newval2", newval2);
    let newDimensions1 = {
      ...item,
      left: newval1,
    };
    let newDimensions2 = {
      ...item,
      left: newval2,
    };
    setLeft1((prev) => newDimensions1);
    setLeft2((prev) => newDimensions2);
  }, [props]);
  return (
    // <>
    //   <div
    //     className="drip-line-new"
    //     style={{
    //       //   ...item,
    //       ...left1,
    //       // transform: item?.rotate
    //       //   ? [{ rotate: "16deg" }]
    //       //   : [{ rotate: "16deg" }],
    //     }}
    //   >
    //     {/* <div className="liquid" style={{ animationDelay: "10s" }}></div> */}
    //     <Liquid delay={item?.delay} />
    //   </div>
    //   <div
    //     className="drip-line-new"
    //     style={{
    //       ...item,
    //       ...left2,
    //       // transform: item?.rotate
    //       //   ? [{ rotate: "16deg" }]
    //       //   : [{ rotate: "16deg" }],
    //     }}
    //   >
    //     {/* <div className="liquid" style={{ animationDelay: "10s" }}></div> */}
    //     <Liquid delay={item?.delay} />
    //   </div>
    //   <div
    //     className="drip-line-new"
    //     style={{
    //       ...item,
    //       //   ...left2,
    //       // transform: item?.rotate
    //       //   ? [{ rotate: "16deg" }]
    //       //   : [{ rotate: "16deg" }],
    //     }}
    //   >
    //     {/* <div className="liquid" style={{ animationDelay: "10s" }}></div> */}
    //     <Liquid delay={item?.delay} />
    //   </div>
    // </>
    <>
      <div
        className="drip-line"
        style={{
          position: "absolute",
          //   width: "10%",
          //   height: 10,
          //   border: "1px solid white",
          ...item,
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div className="line-1">
          <div className="liquid2"></div>
        </div>
      </div>
    </>
  );
};

export default DripLine;

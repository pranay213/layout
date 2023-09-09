// import { styled } from "styled-components";

import styled from "styled-components";
import "./drip-line.module.scss";
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
  height: 0.25px;
  // background-color: (27, 158, 229, 0.75);
  background-color: rgba(27, 158, 229, 01);
  animation: ${(props) =>
    props.delay
      ? `drip 5s linear ${props.delay}s infinite forwards`
      : "drip 5s linear 0s infinite forwards"};
`;

const Line = (props) => {
  const { item } = props;
  console.log("item", item);
  console.log(item?.id);
  return (
    <>
      <div
        className="line-new"
        style={{
          ...item,
          // transform: item?.rotate
          //   ? [{ rotate: "16deg" }]
          //   : [{ rotate: "16deg" }],
        }}
      >
        {/* <div className="liquid" style={{ animationDelay: "10s" }}></div> */}
        <Liquid delay={item?.delay} />
      </div>
    </>
  );
};

export default Line;

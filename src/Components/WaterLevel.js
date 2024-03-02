import { color } from "d3-color";
import { interpolateRgb } from "d3-interpolate";
import React, { Component, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import LiquidFillGauge from "react-liquid-gauge";

const WaterLevel = ({ radius = 50, ...props }) => {
  const { value, closeFn, status } = props;

  const startColor = "#6495ed"; // cornflowerblue
  const endColor = "##7ABEE6"; // crimson
  const interpolate = interpolateRgb(startColor, endColor);
  const fillColor = interpolate(value / 100);
  const gradientStops = [
    {
      key: "0%",
      stopColor: color(fillColor).darker(0.5).toString(),
      stopOpacity: 1,
      offset: "0%",
    },
    {
      key: "50%",
      stopColor: fillColor,
      stopOpacity: 0.75,
      offset: "50%",
    },
    {
      key: "100%",
      stopColor: color(fillColor).brighter(0.5).toString(),
      stopOpacity: 0.5,
      offset: "100%",
    },
  ];

  return (
    <>
      {/* <div className="absolute right-[25%] top-[0%] bg-blue-700 rounded-md z-[500]">
        <span className="text-white z-[100]" onClick={closeFn}>
          X
        </span>
      </div> */}

      <div className="flex flex-col items-center justify-center">
        <LiquidFillGauge
          {...props}
          width={radius * 2}
          height={radius * 2}
          value={value}
          percent="%"
          textSize={1}
          textOffsetX={0}
          textOffsetY={0}
          textRenderer={({ value, width, height, textSize, percent }) => {
            value = Math.round(value);
            const radius = Math.min(height / 2, width / 2);
            const textPixels = (textSize * radius) / 2;
            const valueStyle = {
              fontSize: 14,
            };
            const percentStyle = {
              fontSize: textPixels * 0.6,
            };

            return (
              <tspan>
                <tspan className="value text-rose-600 " style={valueStyle}>
                  {value}
                </tspan>
                <tspan style={percentStyle}>{percent}</tspan>
              </tspan>
            );
          }}
          riseAnimation
          waveAnimation
          waveFrequency={5}
          waveAmplitude={5}
          gradient
          gradientStops={gradientStops}
          circleStyle={{
            fill: fillColor,
          }}
          waveStyle={{
            fill: fillColor,
          }}
          textStyle={{
            fill: color("#000").toString(),
            fontFamily: "Arial",
          }}
          waveTextStyle={{
            fill: color("#000").toString(),
            fontFamily: "Arial",
          }}
        />
        <p className="text-center mx-auto text-white">Sump Level</p>
      </div>
    </>
  );
};

export default WaterLevel;

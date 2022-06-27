import React from "react";

export const GlobalGreenBtn = ({
  text,
  width,
  height,
  color,
  bcgColor,
  fonSize,
  lineHei,
  fontW,
  brdRadius,
}) => {
  return (
    <>
      <button
        className="myBtn"
        style={{
          width: width,
          height: height,
          color: color,
          backgroundColor: bcgColor,
          fontSize: fonSize,
          lineHeight: lineHei,
          fontWeight: fontW,
          borderRadius: brdRadius,
          cursor: "pointer",
          border: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {text}
      </button>
    </>
  );
};

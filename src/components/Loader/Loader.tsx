import React from "react";
import { RotatingLines } from "react-loader-spinner";

export default function Loader() {
  return (
    <div className="w-fit">
      <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible
      />
    </div>
  );
}

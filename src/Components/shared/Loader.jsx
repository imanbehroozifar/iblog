import React from "react";
import { TailSpin } from "react-loader-spinner";
const Loader = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "1000px",
        display: "flex",
              justifyContent: "center",
        paddingTop:'80px'
      }}
    >
      <TailSpin
        height="200"
        width="200"
        radius="9"
        color="#d32f2f"
        ariaLabel="loading"
      />
    </div>
  );
};

export default Loader;

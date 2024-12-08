import React from "react";
import Lottie from "lottie-react";
import loaderAnimation from "../../../../public/loaderAnimation.json";

const LottieReact = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Lottie
        animationData={loaderAnimation}
        loop
        style={{ height: "200px", width: "200px" }}
      />
    </div>
  );
};

export default LottieReact;

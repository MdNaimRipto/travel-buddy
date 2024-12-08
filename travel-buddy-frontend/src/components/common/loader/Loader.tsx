import React from "react";
import dynamic from "next/dynamic";

const LottieAnimation = dynamic(() => import("./LottieReact"), {
  ssr: false,
});

const Loader = () => {
  return <LottieAnimation />;
};

export default Loader;

import React, { ReactElement, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const OnScrollAnimation = ({ children }: { children: ReactElement }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const onScrollVariant = {
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
    hidden: { opacity: 0, y: 40 },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={onScrollVariant}
      animate={controls}
    >
      {children}
    </motion.div>
  );
};

export default OnScrollAnimation;

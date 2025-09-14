import { Box } from "@mui/material";
import { motion } from "framer-motion";
import "./Preloader.css";

const MotionBox = motion(Box);

const fadeExit = {
  hidden: { opacity: 1 }, // no entrance animation
  visible: { opacity: 1 }, // stay fully visible
  exit: {
    opacity: 0,           // fade out smoothly
    transition: { duration: 0.8, ease: "easeInOut" },
  },
};

const Preloader = () => {
  return (
    <MotionBox
      // @ts-ignore
      variants={fadeExit}
      initial="visible"   // start visible (no drop-in)
      animate="visible"   // stay visible
      exit="exit"         // only animate exit
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(145deg, #1c1c1c, #0f0f0f)",
      }}
    >
      <div className="pyramid-loader">
        <div className="wrapper">
          <span className="side side1"></span>
          <span className="side side2"></span>
          <span className="side side3"></span>
          <span className="side side4"></span>
          <span className="shadow"></span>
        </div>
      </div>
    </MotionBox>
  );
};

export default Preloader;

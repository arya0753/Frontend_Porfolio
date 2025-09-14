import { Box } from "@mui/material";
import { motion } from "framer-motion";
import FirstBox from "../HomeThirdRow/FirstBox";
import SecondBox from "../HomeThirdRow/SecondBox";

const MotionBox = motion(Box);

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 50 },
  visible: { opacity: 1, scale: 1, y: 0 },
  hover: { scale: 1.05 },
};

const Box3 = () => {
  return (
    <MotionBox
      // variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      whileHover="hover"
      transition={{ duration: 0.6, ease: "easeOut" }}
      sx={{
        backgroundColor: "transparent",
        width: {md:"100%"},
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "center",
        alignItems: "center",
        gap: 2,
        p: 2,
      }}
    >
      <FirstBox />
      <SecondBox />
    </MotionBox>
  );
};

export default Box3;

import { Box } from "@mui/material";
import { motion } from "framer-motion";
import Box2 from "../HomeFirstRow/firstbox/Box2";
import Profile from "../HomeFirstRow/firstbox/Profile";
import SecondBox from "../HomeFirstRow/SecondBox/SecondBox";

const MotionBox = motion(Box);

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
  hover: { scale: 0.97 },
};

const Box1 = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "center",
        alignItems: "center",
        gap: { xs: 0, md: 3 },
        // p: 2,
        backgroundColor: "transparent",
      }}>
      {/* Left big card */}
      <MotionBox
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
        whileHover="hover"
        transition={{ duration: 0.5 }}
        sx={{
          cursor: "pointer",
          // flex: { xs: "1 1 100%", md: "1 1 55%" },
          // minHeight: 80,
          background: "linear-gradient(145deg, #1c1c1c, #0f0f0f)",
          borderRadius: 4,
          // width:{xs:400},
          p: { xs: 1, md: 3 },
          boxShadow: 3,
          display: "flex",
          flexDirection: "row",
          // gap: 2,
        }}>
        <Box
          sx={{
            flex: 1,

            borderRadius: 3,
            // boxShadow: "inset 0 4px 10px rgba(0,0,0,0.6)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            p: 0.5,
            // backgroundColor: "rgba(255, 255, 255, 0.05)",
          }}>
          <Profile />
        </Box>

        <Box
          sx={{
            flex: 1,
            borderRadius: 3,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            // p: 2,
          }}>
          <Box2 />
        </Box>
      </MotionBox>

      {/* Right nested card */}
      <MotionBox
        // variants={cardVariants}
        // initial="hidden"
        // animate="visible"
        // whileHover="hover"
        // transition={{ duration: 0.5 }}
        sx={{
          flex: { xs: "1 1 100%", md: "1 1 45%" },
          minHeight: 100,
          // background: "linear-gradient(145deg, #1c1c1c, #0f0f0f)",
          borderRadius: 4,
          p: 2,
          // boxShadow: 3,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <SecondBox />
      </MotionBox>
    </Box>
  );
};

export default Box1;

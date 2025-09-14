import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
  hover: { scale: 0.97 },
};

const FirstBox = () => {
  return (
    <>
      <MotionBox
       variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
        whileHover="hover"
        transition={{ duration: 0.5 }}
        sx={{
          cursor: "pointer",
          // flex: 1,
          // minHeight: 0,
          width:{xs:"100%"},
          background: "linear-gradient(145deg, #1c1c1c, #0f0f0f)",
          borderRadius: 4,
          p: {xs:1,md:2},
          gap: 3.5,
          color: "white",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: 3,
        }}>
        <MotionBox
            whileHover={{ scale: 0.97 }}
          initial={{ opacity: 0, scale: 0.4 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          sx={{
            cursor: "pointer",
            flex: 1,
            // minHeight: {md:30},
            width:{md:70},
            background: "linear-gradient(145deg, #1c1c1c, #0f0f0f)",
            borderRadius: 4,
            p: 2,
            color: "white",
            display: "flex",
            flexDirection: { xs: "column", md: "column" },
            justifyContent: "center",
            alignItems: "center",
            // flexDirection: "column",
            boxShadow: 3,
          }}>
          <Typography sx={{ fontSize: {xs:15,md:25}, mb: 1, fontFamily: "MyFont-Bold" }}>
            01
          </Typography>
          <Typography
            sx={{
              fontSize:{xs:10},
              textAlign: "center",
              opacity: 0.3,
            }}>
            Years of Experience
          </Typography>
        </MotionBox>

        <MotionBox
          //   whileHover={{ scale: 0.97 }}
          initial={{ opacity: 0, scale: 0.4 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          sx={{
            flex: 1,
            minHeight: 30,
            
            background: "linear-gradient(145deg, #1c1c1c, #0f0f0f)",
            borderRadius: 4,
            p: 3,
            color: "white",
            display: "flex",
            width:{md:70},
            flexDirection: { xs: "column", md: "column" },
            justifyContent: "center",
            alignItems: "center",
            boxShadow: 3,
          }}>
          <Typography sx={{ fontSize: {xs:15,md:25}, mb: 1, fontFamily: "MyFont-Bold" }}>
            01
          </Typography>
          <Typography
            sx={{
              fontSize:{xs:10},
              textAlign: "center",
              opacity: 0.3,
            }}>
            Years of Experience
          </Typography>
        </MotionBox>

        <MotionBox
          //   whileHover={{ scale: 0.97 }}
          initial={{ opacity: 0, scale: 0.4 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          sx={{
            flex: 1,
            minHeight: 30,
            background: "linear-gradient(145deg, #1c1c1c, #0f0f0f)",
            borderRadius: 4,
            width:{md:70},
            p: 3,
            color: "white",
            display: "flex",
            flexDirection: { xs: "column", md: "column" },
            justifyContent: "center",
            alignItems: "center",
            boxShadow: 3,
          }}>
          <Typography sx={{ fontSize: {xs:15,md:25}, mb: 1, fontFamily: "MyFont-Bold" }}>
            01
          </Typography>
          <Typography
            sx={{
              fontSize:{xs:10},
              textAlign: "center",
              opacity: 0.3,
            }}>
            Years of Experience
          </Typography>
        </MotionBox>
      </MotionBox>
    </>
  );
};

export default FirstBox;

import { Box, Grid, Typography } from "@mui/material";
// @ts-ignore
import photo from "../assets/profile.png";
// @ts-ignore
import star2 from "../assets/star-2.png";

import { motion } from "framer-motion";

const MotionBox = motion(Box);

const cardVariants = {
  hidden: { opacity: 0, scale: 0.5, y: 50 },
  visible: { opacity: 1, scale: 1, y: 0 },
  // hover: { scale: 1.05 },
};

const FirstRow = () => {
  return (
    <Box>
      <Grid container spacing={1}>
        <Grid
          size={{ xs: 12, sm: 6, md: 4 }}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <MotionBox
            // @ts-ignore
            component="img"
            src={photo}
            alt="Logo"
            sx={{
              background: "linear-gradient(145deg, #1c1c1c, #0f0f0f)",
              height: { xs: 120, md: 150 },
              borderRadius: 9,
              p: 2,
              // boxShadow: "inset 0 4px 10px rgba(0,0,0,0.6)",
            }}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            // whileHover="hover"
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
        </Grid>

        <Grid
          size={{ xs: 12, sm: 6, md: 8 }}
          sx={{
            color: "white",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box>
            <MotionBox
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              // whileHover="hover"
              transition={{ duration: 0.8, ease: "easeOut" }}
              sx={{ display: "flex" }}
            >
              <img src={star2} alt="" />
              <Typography
                sx={{
                  color: "white",
                  fontFamily: "MyFont-Bold",
                  fontSize: 30,
                  pb: 1,
                }}
              >
                SELF SUMMARY
              </Typography>
              <img src={star2} alt="" />
            </MotionBox>
            <MotionBox
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              animate="visible"
              // whileHover="hover"
              transition={{ duration: 0.8, ease: "easeOut" }}
              sx={{
                background: "linear-gradient(145deg, #1c1c1c, #0f0f0f)",
                borderRadius: 9,
                p: 2.3,
              }}
            >
              <Typography
                sx={{
                  fontFamily: "MyFont-Bold",
                  fontSize: 20,
                }}
              >
                Arya Sunirmal
                <Typography
                  sx={{
                    opacity: 0.4,
                    fontSize: 10,
                  }}
                >
                  I am a San Banglore-based product designer with a focus on web
                  design, illustration, a visual development. I have a diverse
                  range of experience having worked across various fields and
                  industries.
                </Typography>
              </Typography>
            </MotionBox>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FirstRow;

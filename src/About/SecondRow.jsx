import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const cardVariants = {
  hidden: { opacity: 0, scale: 0.5, y: 50 },
  visible: { opacity: 1, scale: 1, y: 0 },
  // hover: { scale: 1.05 },
};

const SecondRow = () => {
  return (
    <>
      <Box>
        <Grid container spacing={1}>
          <Grid
            size={{ xs: 12, sm: 6, md: 6 }}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              // background:"white",
              p:0,
              m:0
            }}
          >
            <MotionBox
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            // whileHover="hover"
            transition={{ duration: 0.8, ease: "easeOut" }}
              sx={{
                background: "linear-gradient(145deg, #1c1c1c, #0f0f0f)",
                color: "white",
                p: 3,
                px:3,
                my:3,
                // m:2,
                borderRadius: 9,
              }}
            >
              <Box sx={{p: 1}}>
              <Typography sx={{fontFamily:"MyFont-Bold"}}>EDUCATION</Typography> <br />
              <Typography sx={{opacity:0.4,fontFamily:"MyFont-Regular"}}>2020 - 2024</Typography> 
              <Typography sx={{fontFamily:"MyFont-Bold"}}>Bachelor Degree in Technology</Typography> 
              <Typography sx={{opacity:0.4,fontFamily:"MyFont-Regular",fontSize:13}}>Biju Pattanaik University of Technology</Typography> <br />
              <Typography sx={{opacity:0.4}}>2018 - 2020</Typography> 
              <Typography sx={{fontFamily:"MyFont-Bold"}}>Higher Secondary School</Typography> 
              <Typography sx={{opacity:0.4,fontFamily:"MyFont-Regular",fontSize:13}}>RHSSSAC, Bhubaneswar, Odisha</Typography>
              </Box>

            </MotionBox>
          </Grid>

        <Grid
            size={{ xs: 12, sm: 6, md: 6 }}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              // background:"white",
              p:0,
              m:0
            }}
          >
            <MotionBox
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            // whileHover="hover"
            transition={{ duration: 0.8, ease: "easeOut" }}
              sx={{
                background: "linear-gradient(145deg, #1c1c1c, #0f0f0f)",
                color: "white",
                p: 3,
                px:6,
                my:3,
                // m:2,
                borderRadius: 9,
              }}
            >
              <Box sx={{p: 1}}>
              <Typography sx={{fontFamily:"MyFont-Bold"}}>EXPERIENCE</Typography> <br />
              <Typography sx={{opacity:0.4,fontFamily:"MyFont-Regular"}}>2023 - 2024</Typography> 
              <Typography sx={{fontFamily:"MyFont-Bold"}}>Fullstack Internship</Typography> 
              <Typography sx={{opacity:0.4,fontFamily:"MyFont-Regular",fontSize:13}}>SequeSpace Pvt. Ltd.</Typography> <br />
              <Typography sx={{opacity:0.4}}>2024 - 2025</Typography> 
              <Typography sx={{fontFamily:"MyFont-Bold"}}>Fullastack Training Course</Typography> 
              <Typography sx={{opacity:0.4,fontFamily:"MyFont-Regular",fontSize:13}}>NareshIt, Ameerpet, Hyderabad</Typography>
              </Box>

            </MotionBox>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default SecondRow;

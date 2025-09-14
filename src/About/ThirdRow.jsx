import { Box, Grid, Typography } from "@mui/material";
// @ts-ignore
import star2 from "../assets/star-2.png";
import { skills } from "./Logo";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 50 },
  visible: { opacity: 1, scale: 1, y: 0 },
  hover: { scale: 1.05 },
};

const ThirdRow = () => {
  return (
    <Box sx={{ p: { xs: 2, md: 4 },  }}>
      {/* Title */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          justifyContent: "center",
          mb: 3,
        }}
      >
        <img src={star2} alt="star" style={{ height: 30 }} />
        <Typography
          sx={{
            color: "white",
            fontFamily: "MyFont-Bold",
            fontSize: { xs: 24, md: 32 },
            letterSpacing: 2,
          }}
        >
          SKILLS
        </Typography>
        <img src={star2} alt="star" style={{ height: 30 }} />
      </Box>

      {/* Skills Grid */}
      <Grid container spacing={3} justifyContent="center">
        {skills.map((skill) => (
          <Grid size={{ xs: 6, sm: 6, md: 3 }}>
            <MotionBox
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.1 }} 
              whileHover="hover"
              transition={{ duration: 0.6, ease: "easeOut" }}
              sx={{
                background: "linear-gradient(145deg, #1e1e1e, #0c0c0c)",
                borderRadius: 4,
                boxShadow: "0 8px 20px rgba(0,0,0,0.4)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: 120,
                cursor: "pointer",
                flexDirection:"column",
                py:2,
                pb:0,
                // "&:hover": {
                //   boxShadow: "0 0px 25px rgba(255, 255, 255, 0.47)",
                // },
              }}
            >
              {skill.icon}
              <Typography sx={{
                color:"white",
                fontFamily:"MyFont-Bold",
                p:2,
                fontSize:10
              }}>{skill.name}</Typography>
            </MotionBox>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ThirdRow;

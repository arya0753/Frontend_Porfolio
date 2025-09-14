import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';

const MotionBox = motion(Box);
const cardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
  hover: { scale: 0.97 },
};

const R2Box3 = () => {
  const navigate = useNavigate();
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
          flex: 1,
          width:{xs:"100%"},
          // minHeight: 180,
          background: "linear-gradient(145deg, #1c1c1c, #0f0f0f)",
          borderRadius: 4,
          p: {xs:4,md:3},
          color: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          boxShadow: 3,
        }}
        onClick={() => navigate('/contact')}
      >
        <Box sx={{}}>
          <Box
            sx={{
              borderRadius: 2,
              display: "flex",
              p: 0.9,
              // background: "linear-gradient(145deg, #1c1c1c, #0f0f0f)",
            }}
          >
            <InstagramIcon
              onClick={() =>
                window.open("https://www.instagram.com/auro.arya/")
              }
              sx={{
                background: "linear-gradient(145deg, #1c1c1c, #0f0f0f)",
                borderRadius: 50,
                mx: 1,
                height: 50,
                px: 1.5,
                border: 1,
                transition: "all 0.3s ease-in-out",
                "&:hover": {
                  filter: "invert(1)", // 🔹 inverts colors
                  transform: "scale(1.1)",
                },
              }}
            />

            <LinkedInIcon
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/arya-sunirmal-67898a21a/"
                )
              }
              sx={{
                background: "linear-gradient(145deg, #1c1c1c, #0f0f0f)",
                borderRadius: 50,
                mx: 1,
                height: 50,
                px: 1.5,
                border: 1,
                transition: "all 0.3s ease-in-out",
                "&:hover": {
                  filter: "invert(1)", // 🔹 inverts colors
                  transform: "scale(1.1)",
                },
              }}
            />
          </Box>

          <Box
            sx={{
              height: 40,
              mt: 1.5,
              // textTransform:"uppercase",
            }}
          >
            <Typography
              sx={{
                fontFamily: "MyFont-Bold",
                fontSize: 14,
                textTransform: "uppercase",
              }}
            >
              Stay With me
            </Typography>
            <Typography
              sx={{
                fontSize: 12,
                mt: 0.5,
                fontFamily: "MyFont-Semibold",
              }}
            >
              Profiles
              <NavigateNextIcon
                sx={{
                  ml: 6,
                  // "&:hover":{
                  //     fontSize:21
                  // },
                }}
              />
            </Typography>
          </Box>
        </Box>
      </MotionBox>
    </>
  );
};

export default R2Box3;

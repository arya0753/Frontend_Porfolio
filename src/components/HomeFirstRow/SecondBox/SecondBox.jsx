import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
// @ts-ignore
import { useNavigate } from 'react-router-dom';
import projectLogo from "../../../assets/projectlogo.jpg";




const MotionBox = motion(Box);

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
  hover: { scale: 0.97 },
};

const SecondBox = () => {
   const navigate = useNavigate();
  return (
    <MotionBox
    onClick={() => navigate('/about')}
      sx={{
        // cursor:'pointer',
        width: {xs:"100%"},
        display: "flex",
        flexDirection: { xs: "column", sm: "column" },
        gap: 2,
        justifyContent: "center",
        alignItems: "center", // 🔑 make heights equal
      }}
    >
      {/* About Me Card */}
      <MotionBox
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
        whileHover="hover"
        transition={{ duration: 0.5 }}
        sx={{
          cursor:'pointer',
          flex: "1 ",
          // minHeight: 20, // 🔑 fixed height like Box2
          borderRadius: 4,
          p: {xs:5.7,md:3},
          px:{md:4.5},
          width:{xs:"100%",md:"87%"},
          boxShadow: 3,
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          background: "linear-gradient(145deg, #1c1c1c, #0f0f0f)",
          color: "white",
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "1rem", sm: "0.8rem" },
            fontWeight: "bold",
            textShadow: "0 0 20px rgba(255,255,255,0.4)",
          }}
        >
          ABOUT ME
        </Typography>

        <Box sx={{ textAlign: "right" }}
        
        >
          <Typography

            sx={{
              fontSize: { xs: "0.8rem", sm: "0.6rem" },
              textTransform: "uppercase",
              opacity: 0.7,
            }}
          >
            More About Me
          </Typography>
          <Typography sx={{ fontSize: { xs: "0.7rem", sm: "0.6rem" } }}>
            Credentials
          </Typography>
          <NavigateNextIcon sx={{ fontSize: 28, mt: 1 }} />
        </Box>
      </MotionBox>

      {/* Projects Card */}
      <MotionBox
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
        whileHover="hover"
        transition={{ duration: 0.5 }}
        onClick={() => navigate('/Work')}
        sx={{
          width:{xs:"100%",md:"87%"},
          cursor:'pointer',
          flex: "1 1 50%",
          // minHeight: 10, // 🔑 same as About Me
          borderRadius: 4,
          p: {xs:5.7,md:3},
          px:{md:4.5},
          boxShadow: 3,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: "linear-gradient(145deg, #1c1c1c, #0f0f0f)",
          color: "white",
        }}
      >
        <Box
          component="img"
          src={projectLogo}
          alt="project logo"
          sx={{
            height: 50,
            width: 50,
            borderRadius: 2,
            objectFit: "cover",
          }}
        />

        <Box sx={{ flex: 1, ml: 2 }}>
          <Typography sx={{ opacity: 0.5, fontSize: 10 }}>
            See My Work
          </Typography>
          <Typography sx={{ fontSize: 15, fontWeight: "bold" }}>
            PROJECTS...
          </Typography>
        </Box>

        <NavigateNextIcon sx={{ fontSize: 40 }} />
      </MotionBox>
    </MotionBox>
  );
};

export default SecondBox;

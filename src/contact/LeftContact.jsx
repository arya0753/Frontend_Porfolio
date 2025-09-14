import { Box, Grid, Typography } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import CallIcon from "@mui/icons-material/Call";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
  hover: { scale: 0.97 },
};

const LeftContact = () => {
  return (
    <>
   
       
        
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
         
        }}
      >
        <Box
          sx={{
            background: "linear-gradient(145deg, #1c1c1c, #0f0f0f)",
            p: 2,
            borderRadius: 3,
          }}
        >
          <EmailIcon sx={{ fontSize: 25 }} />
        </Box>
        <Box>
          <Typography
            sx={{
              color: "white",
              fontFamily: "MyFont-Bold",
              opacity: 0.2,
              textTransform: "uppercase",
            }}
          >
            Mail Me
          </Typography>
          <Typography
            sx={{
              color: "white",
              fontFamily: "MyFont-Bold",
              fontSize: 10,
              // opacity:0.2,
              // textTransform:"uppercase"
            }}
          >
            sunirmal.arya751@gmail.com <br /> arya.sunirmal753@gamil.com
          </Typography>
        </Box>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Box
          sx={{
            background: "linear-gradient(145deg, #1c1c1c, #0f0f0f)",
            p: 2,
            borderRadius: 3,
          }}
        >
          <CallIcon sx={{ fontSize: 25 }} />
        </Box>
        <Box>
          <Typography
            sx={{
              color: "white",
              fontFamily: "MyFont-Bold",
              opacity: 0.2,
              textTransform: "uppercase",
            }}
          >
            Contact Me
          </Typography>
          <Typography
            sx={{
              color: "white",
              fontFamily: "MyFont-Bold",
              fontSize: 11,
              // opacity:0.2,
              // textTransform:"uppercase"
            }}
          >
            +91-8260330233 <br /> +91-7381330233
          </Typography>
        </Box>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Box
          sx={{
            background: "linear-gradient(145deg, #1c1c1c, #0f0f0f)",
            p: 2,
            borderRadius: 3,
          }}
        >
          <LocationOnIcon sx={{ fontSize: 25 }} />
        </Box>
        <Box>
          <Typography
            sx={{
              color: "white",
              fontFamily: "MyFont-Bold",
              opacity: 0.2,
              textTransform: "uppercase",
            }}
          >
            Location
          </Typography>
          <Typography
            sx={{
              color: "white",
              fontFamily: "MyFont-Bold",
              fontSize: 11,
              // opacity:0.2,
              // textTransform:"uppercase"
            }}
          >
            Matrubihar,
            <br />
            Kalupadaghat,Khordha,
            <br />
            Odisha
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          pb: 2,
        }}
      >
        <MotionBox
          sx={{
            p: 1.5,
            background: "linear-gradient(145deg, #1c1c1c, #0f0f0f)",
            borderRadius: 2,
            color: "white",
            transition: "all 0.3s ease-in-out",
            "&:hover": {
              filter: "invert(1)",
            },
          }}
        >
          <InstagramIcon />
        </MotionBox>
        <MotionBox
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          transition={{ duration: 0.5 }}
          sx={{
            p: 1.5,
            background: "linear-gradient(145deg, #1c1c1c, #0f0f0f)",
            borderRadius: 2,
            color: "white",
            transition: "all 0.3s ease-in-out",
            "&:hover": {
              filter: "invert(1)",
            },
          }}
        >
          <LinkedInIcon />
        </MotionBox>
        <MotionBox
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          transition={{ duration: 0.5 }}
          sx={{
            p: 1.5,
            background: "linear-gradient(145deg, #1c1c1c, #0f0f0f)",
            borderRadius: 2,
            color: "white",
            transition: "all 0.3s ease-in-out",
            "&:hover": {
              filter: "invert(1)",
            },
          }}
        >
          <TwitterIcon />
        </MotionBox>
      </Box>
      
    </>
  );
};

export default LeftContact;

import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
// @ts-ignore
import { useNavigate } from 'react-router-dom';
import icon from "../../assets/icon2.png";


const MotionBox = motion(Box);

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
  hover: { scale: 0.97 },
};

const SecondBox = () => {
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
        onClick={() => navigate('/contact')}
        sx={{
          cursor: "pointer",
          width:{xs:"100%",md:210},
          flex: 1,
          // minHeight: 60,
          background: "linear-gradient(145deg, #1c1c1c, #0f0f0f)",
          borderRadius: 4,
          px: {xs:1,md:5.5},
          py: {xs:1,md:2.5},
          color: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "start",
          boxShadow: 3,
        }}>
        <Box>
          <img src={icon} alt="image-icon" style={{ width: 25, height: 50 }} />
        </Box>
        <Typography
          sx={{
            fontFamily: "MyFont-Bold",
            fontSize: 20,
          }}>
          Let's
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
          }}>
          <Typography sx={{ fontFamily: "MyFont-Bold", fontSize: 20 }}>
            Work
          </Typography>
          <Typography
            sx={{ color: "blue", fontFamily: "MyFont-Bold", fontSize: 20 }}>
            &nbsp;Together...
          </Typography>
          <NavigateNextIcon
            sx={{
              color: "white",
              mt: 0.5,
              fontSize: 30,
              ml: 1,
            }}
          />
        </Box>
      </MotionBox>
    </>
  );
};

export default SecondBox;

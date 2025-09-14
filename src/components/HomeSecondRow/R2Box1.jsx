import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
// @ts-ignore
import { useNavigate } from 'react-router-dom';
import blog from '../../assets/gfonts.png';


const R2Box1 = () => {
  const navigate = useNavigate();
  
const MotionBox = motion(Box);

  return (
    <>
      <MotionBox
        onClick={() => navigate('/viewblog')}
        whileHover={{ scale: 0.97 }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        sx={{
          // width:{xs:"60vw"},
          width:{xs:"100%"},
          cursor:'pointer',
          flex: 1,
          minHeight: {xs:80,md:100},
          background: "linear-gradient(145deg, #1c1c1c, #0f0f0f)",
          borderRadius: 4,
          p: {xs:4,md:3},
          color: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "start",
          // textAlign: "center",
          boxShadow: 3,
        }}
      >
        <Box>
          <img src={blog} alt="blogImg"
            style={{ width: '100px', height: '60px' }}
          />
        </Box>

        <Box
          sx={{

            display: "flex",
            flexDirection: "row",
            justifyContent: "center",


          }}
        >
          <Box
            
          >
            <Typography> BLOG <br /> GFonts</Typography>
            
            
            </Box>

          <NavigateNextIcon sx={{ fontSize: 30, ml: 13 }} />

        </Box>
         
      </MotionBox>
    </>
  )
}

export default R2Box1
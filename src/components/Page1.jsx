import { Box } from "@mui/material";
import { motion } from "framer-motion";
import Box1 from "./home/Box1";
import Box2 from "./home/Box2";
import Box3 from "./home/Box3";

const MotionBox = motion(Box);

const Page1 = () => {
  return (
    
      <Box
        sx={{
          // width: "55%" ,
          // minHeight: "100vh",
          backgroundColor: "transparent",
          borderRadius: 1,
          // backgroundColor:"transparet",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          // gap: 1,
          // p: 2
        }}
      >
        
        <Box1 />   {/* First Row */}        
        <Box2 />   {/* Second Row */}
        <Box3 />   {/* Third Row */}
        
        
      </Box>
    // </Box>
  );
};

export default Page1;
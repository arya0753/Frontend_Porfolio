import { Box } from "@mui/material";
import { motion } from "framer-motion";
import R2Box1 from "../HomeSecondRow/R2Box1";
import R2Box2 from "../HomeSecondRow/R2Box2";
import R2Box3 from "../HomeSecondRow/R2Box3";

const MotionBox = motion(Box);

const Box2 = () => {
  return (
    <>
        <Box
          sx={{
            width: {md:"100%"},
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "center",
            alignItems: "center",
            gap: { xs: 1, md: 2 },
            // p: 2,
          }}
        >
          <R2Box1 />

          <R2Box2 />

          <R2Box3 />
        </Box>
    </>
  )
}

export default Box2
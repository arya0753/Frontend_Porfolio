import { Box, Grid } from "@mui/material";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import FormContact from "./FormContact";
import LeftContact from "./LeftContact";

const MotionBox = motion(Box);

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
  hover: { scale: 0.97 },
};

export default function SimpleGrid() {
  const formRef = useRef(null); // plain JSX ref
  const [formHeight, setFormHeight] = useState("auto"); // plain JS state

  useEffect(() => {
    if (!formRef.current) return;

    // Dynamically track form height
    const observer = new ResizeObserver((entries) => {
      if (entries.length === 0) return;
      const height = entries[0].contentRect.height;
      setFormHeight(`${height}px`); // convert number to string with px
    });

    observer.observe(formRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <Box sx={{ flexGrow: 1, p: 2, }}>
      <Grid container spacing={2} sx={{ml:{xs:2,md:0}}}>
        {/* Left side (height matches FormContact) */}
        <Grid size={{ xs: 11.7, sm: 12, md: 6 }}>
          <MotionBox
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            transition={{ duration: 0.5 }}
            sx={{
              // maxWidth:{xs:"120%"},
              color: "white",
              // background:"red",
              // p: 0.,
              gap: 6,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              borderRadius: 4,
               pl:1,
              // alignItems:"center",
              background: "linear-gradient(145deg, #1c1c1c, #0f0f0f)",
              height: typeof formHeight === "number" ? `${formHeight}px` : formHeight,
            }}
          >
            <LeftContact />
          </MotionBox>
        </Grid>

        {/* Right side (FormContact reference) */}
        <Grid size={{ xs: 11.7, sm: 12, md: 6 }}>
          <Box ref={formRef}>
            <MotionBox
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              transition={{ duration: 0.5 }}
            >
              <FormContact />
            </MotionBox>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

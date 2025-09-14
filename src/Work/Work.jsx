// Works.jsx
import React from "react";
import { works } from "./Data"; // adjust path if needed
import { Grid, Card, CardContent, CardMedia, Typography } from "@mui/material";

import { motion } from "framer-motion";

const MotionCard = motion(Card);

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 50 },
  visible: { opacity: 1, scale: 1, y: 0 },
  hover: { scale: 1.03 },
};

const Works = () => {
  return (
    <Grid container spacing={3} sx={{ padding: 3 }}>
      {works.map((work) => (
        <Grid size={{ xs: 12, md: 12 }} key={work.id}>
          <MotionCard
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            whileHover="hover"
            transition={{ duration: 0.6, ease: "easeOut" }}
            sx={{
              borderRadius: 3,
              boxShadow: 4,
              height: "100%",
              backgroundColor: "#1e1e1e",
              color: "white",
              cursor:"pointer"
            }}
            onClick={() => window.open(work.link)}
          >
            <CardMedia
              component="img"
              height="180"
              image={work.img}
              alt={work.header}
              sx={{ borderTopLeftRadius: 12, borderTopRightRadius: 12 }}
            />
            <CardContent>
              <Typography
                variant="h6"
                gutterBottom
                sx={{ fontFamily: "MyFont-Bold" }}
                
              >
                {work.header}
              </Typography>
              <Typography variant="body2" color="gray">
                {work.description}
              </Typography>
            </CardContent>
          </MotionCard>
        </Grid>
      ))}
    </Grid>
  );
};

export default Works;

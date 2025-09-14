import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { CgWebsite } from "react-icons/cg";
import { FaDatabase } from "react-icons/fa";
import { MdAnimation } from "react-icons/md";
import { SiAndroidstudio } from "react-icons/si";

const MotionBox = motion(Box);

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
  hover: { scale: 0.97 },
};

const R2Box2 = () => {
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
          width: { xs: "100%" },
          flex: 2,
          minHeight: 100,
          background: "linear-gradient(145deg, #1c1c1c, #0f0f0f)",
          borderRadius: 4,
          p: {xs:4,md:3},
          color: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: 2,
          boxShadow: 3,
        }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            // mb: 2,
            gap: 3,
          }}>
          {[CgWebsite, FaDatabase, MdAnimation, SiAndroidstudio].map(
            (Icon, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                style={{
                  fontSize: "2rem",
                  // color: ,
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  // padding: "10px",
                  borderRadius: "50%",
                  // background: "rgba(255,255,255,0.05)",
                  // boxShadow: "0 4px 10px rgba(0,0,0,0.3)"
                }}>
                <Icon />
              </motion.div>
            )
          )}
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            fontWeight: "normal",
            lineHeight: 1.4,
            letterSpacing: 2,
            // mt: 4,
            textTransform: "uppercase",
          }}>
          <Box sx={{ pl: 1.5, mt: 2 }}>
            <Typography sx={{ fontSize: 10 }}>
              {" "}
              Specializtion <br /> Service Offerting
            </Typography>
          </Box>

          <NavigateNextIcon sx={{ fontSize: 25, ml: 8, pr: 2, pt: 2 }} />
        </Box>
      </MotionBox>
    </>
  );
};

export default R2Box2;

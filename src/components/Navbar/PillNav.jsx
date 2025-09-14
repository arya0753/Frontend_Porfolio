import { Box } from "@mui/material";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const MotionBox = motion(Box);

const PillNav = ({
  logo,
  logoAlt = "Logo",
  items = [],
  className = "",
  baseColor = "#000000",
  pillColor = "#ffffff",
  pillTextColor = "#000000",
}) => {
  const location = useLocation();

  return (
    <Box
      className={className}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 4,
        background: baseColor,
        px: 4,
        py: 1.5,
        borderRadius: "999px",
      }}
    >
      {/* Logo */}
      <Link to="/" style={{ textDecoration: "none" }}>
        {/* <Box
          component="img"
          src={logo}
          alt={logoAlt}
          sx={{ height: 35, cursor: "pointer" }}
        /> */}
      </Link>

      {/* Navigation Items */}
      <Box sx={{ display: "flex", gap: 2 }}>
        {items.map((item) => {
          const isActive = location.pathname === item.href;

          return (
            <Link key={item.href} to={item.href} style={{ textDecoration: "none" }}>
              <MotionBox
                whileHover={{
                  scale: 1.05,
                }}
                transition={{ ease: [0.25, 0.1, 0.25, 1], duration: 0.1 }}
                sx={{
                  px: 2.5,
                  py: 1,
                  borderRadius: "999px",
                  fontSize: "0.9rem",
                  fontWeight: 500,
                  fontFamily: "MyFont-Regular",
                  backgroundColor: isActive ? pillColor : "transparent", 
                  color: isActive ? pillTextColor : "#ffffff",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
              >
                {item.label}
              </MotionBox>
            </Link>
          );
        })}
      </Box>
    </Box>
  );
};

export default PillNav;

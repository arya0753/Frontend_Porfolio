import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom"; // ✅ added useLocation
import PillNav from "./PillNav.jsx";
// @ts-ignore
import MenuIcon from "@mui/icons-material/Menu";
import {
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation(); // ✅ get current path
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    navigate("/contact");
  };

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Work", href: "/work" },
    { label: "VBlog", href: "/viewblog" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* Desktop View */}
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          alignItems: "center",
          justifyContent: "center",
          pr: 7,
          gap: 4,
        }}
      >
        <PillNav
          items={navItems}
          activeHref={location.pathname} // ✅ active route
          className="custom-nav"
          baseColor="#000000"
          pillColor="#ffffff"
          pillTextColor="#000000"
          hoveredPillTextColor="#ffffff"
        />

        <Button
          onClick={handleClick}
          sx={{
            color: "white",
            cursor: "pointer",
            borderRadius: 20,
            fontSize: "0.85rem",
            border: "none",
            px: 2,
            py: 1,
            background:
              "radial-gradient(circle 80px at 80% -10%, #1f3660ff, #181b1b)",
            position: "relative",
            transition: "all 0.3s ease-in-out",
            "&::after": {
              content: '""',
              position: "absolute",
              width: "45%",
              height: "40%",
              borderRadius: 20,
              top: 0,
              right: 0,
              boxShadow: "0 0 20px #ffffff38",
              zIndex: -1,
              transition: "all 0.3s ease-in-out",
            },
            "&:hover": {
              transform: "scale(1.05)",
              background:
                "radial-gradient(circle 100px at 80% -10%, #2a5bcf, #0d0d0d)",
              boxShadow: "0 0 25px #1f75fe88, 0 0 50px #1f75fe44",
              "&::after": {
                boxShadow: "0 0 35px #1f75feaa",
              },
            },
          }}
        >
          Contact Me
        </Button>
      </Box>

      {/* Mobile View */}
      <Box
        sx={{
          display: { xs: "flex", md: "none" },
          justifyContent: "flex-end",
          alignItems: "center",
          width: "100%",
        }}
      >
        <IconButton onClick={() => setOpen(true)} sx={{ color: "white" }}>
          <MenuIcon />
        </IconButton>

        <Drawer
          sx={{
            backdropFilter: "blur(5px)",
            "& .MuiPaper-root": {
              background: "#000001ff",
            },
          }}
          anchor="right"
          open={open}
          onClose={() => setOpen(false)}
        >
          <Box
            sx={{
              width: 250,
              p: 2,
              color: "white",
            }}
          >
            <List>
              {navItems.map((item) => (
                <ListItem
                  button
                  key={item.label}
                  onClick={() => {
                    navigate(item.href);
                    setOpen(false);
                  }}
                  sx={{
                    backgroundColor:
                      location.pathname === item.href ? "#1f3660" : "transparent", // ✅ active highlight
                    borderRadius: 2,
                    mb: 1,
                    "&:hover": {
                      backgroundColor: "#2a5bcf",
                    },
                  }}
                >
                  <ListItemText primary={item.label} />
                </ListItem>
              ))}
            </List>

            <Button
              fullWidth
              onClick={() => {
                handleClick();
                setOpen(false);
              }}
              sx={{
                mt: 2,
                color: "white",
                borderRadius: 20,
                fontSize: "0.85rem",
                px: 2,
                py: 1,
                background:
                  "radial-gradient(circle 80px at 80% -10%, #1f3660ff, #181b1b)",
                "&:hover": {
                  background:
                    "radial-gradient(circle 100px at 80% -10%, #2a5bcf, #0d0d0d)",
                },
              }}
            >
              Contact Me
            </Button>
          </Box>
        </Drawer>
      </Box>
    </>
  );
};

export default Navbar;

import { Button } from '@mui/material'
import React from 'react'
import {  useNavigate } from 'react-router-dom'

const Add = () => {
    const navigate = useNavigate();
  return (
    <>
      <Button
        onClick={() => navigate("/blog")}
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
        Add Blog
      </Button>
    </>
  )
}

export default Add

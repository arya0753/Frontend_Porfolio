import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Button, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { contactSchema } from "../contact/validator"; // import schema
// @ts-ignore
import icon from "../assets/icon2.png";


const BACKEND_BASE_URL = import.meta.env.VITE_BACKEND_URL;

const FormContact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(contactSchema),
  });

  const onSubmit = async (data) => {
    try {
      const res = await fetch(`${BACKEND_BASE_URL}/api/postContact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        alert("Message sent successfully ✅");
        reset();
      } else {
        alert("Error sending message ❌");
      }
    } catch (error) {
      console.error(error);
      alert("Server error");
    }
  };

  return (
    <Box
      sx={{
        p: 3,
        display: "flex",
        flexDirection: "column",
        background: "linear-gradient(145deg, #1c1c1c, #0f0f0f)",
        color: "white",
        borderRadius: 3,
      }}
    >
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography sx={{ fontSize: 27, fontFamily: "Myfont-Bold" }}>
          Let's work <span style={{ color: "blue" }}>&nbsp;Together</span>
        </Typography>
        <Box sx={{ pr: 1, pb: 1 }}>
          <img src={icon} alt="" />
        </Box>
      </Box>

      {/* FORM */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            // gap: 1,
          }}
        >
          <input
            {...register("name")}
            placeholder="Enter your name"
            style={inputStyle}
          />
          <p style={{ color: "red", fontSize: 12 }}>{errors.name?.message}</p>

          <input
            {...register("email")}
            placeholder="Enter your Email"
            style={inputStyle}
          />
          <p style={{ color: "red", fontSize: 12 }}>{errors.email?.message}</p>

          <input
            {...register("subject")}
            placeholder="Enter Your Subject"
            style={inputStyle}
          />
          <p style={{ color: "red", fontSize: 12 }}>
            {errors.subject?.message}
          </p>

          <textarea
            {...register("description")}
            placeholder="Message For Us"
            style={{ ...inputStyle, height: "67px" }}
          />
          <p style={{ color: "red", fontSize: 12 }}>
            {errors.description?.message}
          </p>

          <Button
            type="submit"
            variant="contained"
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
            Send
          </Button>
        </Box>
      </form>
    </Box>
  );
};

const inputStyle = {
  height: 15,
  border: "none",
  borderRadius: "20px",
  color: "white",
  padding: "10px 15px",
  background: "linear-gradient(145deg, #0f0f0f, #1c1c1c)",
};

export default FormContact;

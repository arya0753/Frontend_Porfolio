import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const BACKEND_BASE_URL = import.meta.env.VITE_BACKEND_URL;

const PostForm = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("description", data.description);
      formData.append("photo", data.photo[0]);

      const res = await fetch(`${BACKEND_BASE_URL}/api/posts`, {
        method: "POST",
        body: formData,
      });

      const result = await res.json();
      console.log("Post created:", result);

      reset(); // clear form

      // ✅ Navigate to /blog after successful post
      navigate("/viewblog");
    } catch (err) {
      console.error("Error:", err);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{
        display: "flex",
        flexDirection: "column",
        borderRadius: "10px",
        gap: "1rem",
        width: "400px",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "80px",
        background: "linear-gradient(145deg, #1c1c1c, #0f0f0f)",
        color: "white",
        padding: "30px",
      }}
    >
      {/* Title */}
      <div>
        <label>Title: </label>
        <input
          style={{
            color: "white",
            width: "250px",
            height: "25px",
            margin: "10px",
            padding: "5px",
            background: "transparent",
            borderRadius: "10px",
          }}
          type="text"
          placeholder="Title"
          {...register("title", { required: "Title is required" })}
        />
        {errors.title && typeof errors.title?.message === "string" && (
          <p>{errors.title.message}</p>
        )}
      </div>

      {/* Description */}
      <div
        className="description"
        style={{ display: "flex", alignItems: "center" }}
      >
        <label>Description: </label>
        <textarea
          style={{
            color: "white",
            width: "215px",
            height: "65px",
            margin: "10px",
            padding: "5px",
            background: "transparent",
            borderRadius: "10px",
          }}
          {...register("description", { required: "Description is required" })}
        ></textarea>
        {errors.description &&
          typeof errors.description?.message === "string" && (
            <p>{errors.description.message}</p>
          )}
      </div>

      {/* Photo */}
      <div>
        <label>Photo:</label>
        <input
          style={{
            color: "white",
            width: "250px",
            height: "25px",
            margin: "10px",
            padding: "5px",
            background: "transparent",
            borderRadius: "10px",
          }}
          type="file"
          accept="image/*"
          {...register("photo", { required: "Photo is required" })}
        />
        {errors.photo && typeof errors.photo?.message === "string" && (
          <p>{errors.photo.message}</p>
        )}
      </div>

      {/* Submit */}
      <Button
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
        type="submit"
      >
        Submit
      </Button>
    </form>
  );
};

export default PostForm;

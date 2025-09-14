import { Box } from "@mui/material";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Add from "./Add";

const MotionBox = motion(Box);
const BACKEND_BASE_URL = import.meta.env.VITE_BACKEND_URL;

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 40 },
  visible: { opacity: 1, scale: 1, y: 0 },
};

const ViewBlog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch(`${BACKEND_BASE_URL}/api/posts`);
        if (!res.ok) throw new Error("Failed to fetch posts");

        const data = await res.json();
        // Sort posts by newest first
        const sortedPosts = [...data].sort((a, b) => (a._id < b._id ? 1 : -1));
        setPosts(sortedPosts);
      } catch (err) {
        console.error("❌ Error fetching posts:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) return <p style={{ color: "white" }}>Loading blogs...</p>;
  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;
  if (posts.length === 0)
    return (
      <p style={{ color: "white" }}>
        No blogs found. <Add />
      </p>
    );

  return (
    <Box sx={{ width: "100%", maxWidth: "900px", margin: "auto", p: 2 }}>
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mb: 3,
        }}
      >
        <h2 style={{ color: "white" }}>📖 Blog Posts</h2>
        <Add />
      </Box>

      {/* Blog List */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
          p: 2,
          borderRadius: 2,
          background: "linear-gradient(135deg, #1f1f1f, #2a2a2a, #1f1f1f)",
        }}
      >
        {posts.map((post) => (
          <MotionBox
            key={post._id}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            sx={{
              border: "1px solid #333",
              borderRadius: 2,
              p: 3,
              backgroundColor: "#222",
            }}
          >
            <h3
              style={{
                fontSize: "2rem",
                fontWeight: "bold",
                background: "linear-gradient(90deg, #6a11cb, #2575fc)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                marginBottom: "1rem",
              }}
            >
              {post.title}
            </h3>
            <Box sx={{ mb: 2, color: "#ddd" }}>{post.description}</Box>
            {post.photo ? (
              <img
                src={`${BACKEND_BASE_URL}/uploads/${post.photo}`}
                alt={post.title}
                style={{
                  width: "100%",
                  maxHeight: "400px",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
                onError={(e) => {
                  e.target.src = "/placeholder.png";
                }}
              />
            ) : (
              <p style={{ color: "#aaa" }}>No image available</p>
            )}
          </MotionBox>
        ))}
      </Box>
    </Box>
  );
};

export default ViewBlog;

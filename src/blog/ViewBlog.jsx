import { Box } from "@mui/material";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Add from "./Add";

const MotionBox = motion(Box);
const BACKEND_BASE_URL = import.meta.env.VITE_BACKEND_URL;

const cardVariants = {
  hidden: { opacity: 0, scale: 0.5, y: 50 },
  visible: { opacity: 1, scale: 1, y: 0 },
};

const ViewBlog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch(`${BACKEND_BASE_URL}/api/posts`);
        if (!res.ok) throw new Error("Failed to fetch posts");

        const data = await res.json();
        const sortedPosts = [...data].sort((a, b) =>
          a._id > b._id ? -1 : 1
        );
        setPosts(sortedPosts);
      } catch (err) {
        console.error("❌ Error fetching posts:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) return <p>Loading blogs...</p>;
  if (posts.length === 0)
    return (
      <p style={{ color: "white" }}>
        No blogs found. <Add />
      </p>
    );

  return (
    <div style={{ width: "100%", margin: "auto" }}>
      <div
        className="header"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <h2 style={{ color: "white" }}>📖 Blog Posts</h2>
        <Add />
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          color: "white",
          padding: "2rem",
          gap: "1rem",
          borderRadius: "5px",
          background: "linear-gradient(135deg, #1f1f1f, #2a2a2a, #1f1f1f)",
        }}
      >
        {posts.map((post) => (
          <MotionBox
            key={post._id}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            sx={{
              border: "1px solid black",
              padding: "1rem",
              borderRadius: "8px",
            }}
          >
            <h3
              style={{
                fontSize: "3rem",
                fontWeight: "bold",
                background: "linear-gradient(90deg, #6a11cb, #2575fc)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
              }}
            >
              {post.title}
            </h3>
            <div style={{ width: "100%", marginBottom: "25px" }}>
              {post.description}
            </div>
            {post.photo && (
              <img
                src={`${BACKEND_BASE_URL}/${post.photo}`}
                alt={post.title}
                style={{
                  width: "100%",
                  maxHeight: "fit-content",
                  objectFit: "cover",
                }}
              />
            )}
          </MotionBox>
        ))}
      </div>
    </div>
  );
};

export default ViewBlog;

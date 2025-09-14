import { Box } from "@mui/material";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Add from "./Add";

const MotionBox = motion(Box);

const cardVariants = {
  hidden: { opacity: 0, scale: 0.5, y: 50 },
  visible: { opacity: 1, scale: 1, y: 0 },
};

const ViewBlog = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([
    { _id: "", title: "", description: "", photo: "" },
  ]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch("http://localhost:8000/api/posts");
        const data = await res.json();

        // Sort by _id so the latest blog shows first
        const sortedPosts = [...data].sort((a, b) => {
          if (a._id > b._id) return -1;
          if (a._id < b._id) return 1;
          return 0;
        });

        setPosts(sortedPosts);
      } catch (err) {
        console.error("Error fetching posts:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) return <p>Loading blogs...</p>;
  if (posts.length === 0) return <p style={{color:"white"}}>No blogs found. <Add /></p>;

  return (
    <>
    
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
            animate="visible"
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
            <div
              style={{
                width: "100%",
                maxHeight: "fit-content",
                objectFit: "cover",
                marginBottom: "25px",
              }}
            >
              {post.description}
            </div>
            {post.photo && (
              <img
                src={`http://localhost:8000/${post.photo}`}
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
    </>
  );
};

export default ViewBlog;

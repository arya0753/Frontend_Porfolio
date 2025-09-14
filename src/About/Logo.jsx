import HtmlIcon from "@mui/icons-material/Html";
import CssIcon from "@mui/icons-material/Css";
import JavascriptIcon from "@mui/icons-material/Javascript";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJava, faNodeJs } from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

// @ts-ignore
import framer from "../assets/logos/framer.png";
// @ts-ignore
import mongo from "../assets/logos/mongodb.png";
// @ts-ignore
import express from "../assets/logos/express.png";
// @ts-ignore
import react from "../assets/logos/react.png";
// @ts-ignore
import postman from "../assets/logos/postman.png";

export const skills = [
  { id: 1, type: "mui", name: "HTML", icon: <HtmlIcon sx={{ color: "white" }} /> },
  { id: 2, type: "mui", name: "CSS", icon: <CssIcon sx={{ color: "white" }} /> },
  { id: 3, type: "mui", name: "JavaScript", icon: <JavascriptIcon sx={{ color: "white" }} /> },
  { id: 4, type: "img", name: "Framer Motion", icon: <img src={framer} alt="framer" style={{ height: 50 }} /> },
  { id: 5, type: "img", name: "MongoDB", icon: <img src={mongo} alt="mongo" style={{ height: 50 }} /> },
  { id: 6, type: "img", name: "Express Js", icon: <img src={express} alt="express" style={{ height: 50 }} /> },
  { id: 7, type: "img", name: "React Js", icon: <img src={react} alt="react" style={{ height: 50 }} /> },
  { id: 8, type: "fa", name: "Node.js", icon: <FontAwesomeIcon icon={faNodeJs} size="2x" style={{ color: "white" }} /> },
  { id: 9, type: "fa", name: "Java", icon: <FontAwesomeIcon icon={faJava} size="2x" style={{ color: "white" }} /> },
  { id: 10, type: "fa", name: "Database", icon: <FontAwesomeIcon icon={faDatabase} size="2x" style={{ color: "white" }} /> },
  { id: 11, type: "img", name: "Postman", icon: <img src={postman} alt="postman" style={{ height: 50, borderRadius: 50 }} /> },
];

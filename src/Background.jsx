// BackgroundVideo.jsx
// @ts-ignore
import backvideo from "./assets/back.mp4";
import './Background.css'

const Background = () => {
  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      className="background-video"
    >
      <source src={backvideo} type="video/mp4" />
    </video>
  );
};

export default Background;

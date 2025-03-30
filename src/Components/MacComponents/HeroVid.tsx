import React, { useState, useEffect, useRef } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import video from "../MacComponents/videos/xlarge_2x.mp4";

const HeroVid: React.FC = () => {
  const [scale, setScale] = useState(0.7);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newScale = scrollY < 50 ? 1 : Math.max(0.7, 1 - scrollY / 1200); // Expands slower
      setScale(newScale);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="relative w-full h-[90vh] flex flex-col items-center justify-center overflow-hidden">

      <div
      className="relative transition-all duration-[600ms] ease-in-out pt-32"
        style={{
          width: scale === 1 ? "100vw" : "90%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "44px",
          borderRadius: scale < 1 ? "30px" : "0px", // Round corners only when scrolling down
         overflow: "hidden", 
        }}
      >
        <video
          ref={videoRef}
          src={video}
          className="object-contain  w-full h-ful" // Added w-full and h-full
          autoPlay
          loop
          muted
        ></video>

        <button
          onClick={togglePlayPause}
          className="absolute bottom-5 right-5 bg-gray-400 text-white p-3 rounded-full opacity-80 hover:opacity-100 transition"
          style={{ right: scale ===1? '2vw' : '4.5vw'}} //adjust the right position based on the scale.
        >
          {isPlaying ? <FaPause size={15} /> : <FaPlay size={20} />}
        </button>
      </div>
     
    </section>
  );
};

export default HeroVid;
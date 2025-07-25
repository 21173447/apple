import React, { useRef, useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import vid1 from "../video/Apple (1).mp4";




const Hero0: React.FC = () => {
  const vidRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);


  const handlePlayPause = () => {
    if (vidRef.current) {
      if (isPlaying) {
        vidRef.current.pause();
      } else {
        vidRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };


  return (
    
    <section className="  flex justify-center  items-center w-full h-[70rem]  text-white'">
      <div className="absolute text-center  space-y-3 text-white">
       
        <div className="flex justify-center gap-3">

         <div className="space-y-6">
          <button className="bg-white  font-thin text-2xl text-black space-y-6 p-4  w-56 bg-opacity-80 backdrop-blur-sm  rounded-full flex items-center">
           <FaPlay className=" mr-3"/>
            Watch the film
          </button>
          </div>   

        </div>

      </div>
      <div className="w-full h-full overflow-hidden flex justify-center items-center">
      <video
  src={vid1}
  autoPlay
  loop
  muted
  ref={vidRef}
  className="w-full h-full object-cover"
></video>

      </div>

      <button
        onClick={handlePlayPause}
        className="absolute bottom-[90%] right-10 bg-gray-300 p-5 rounded-full"
      >

        {isPlaying ? <FaPause size={10} /> : <FaPlay size={10} />}
      </button>
      <div>
  </div>

  </section>
  );
};

export default Hero0;

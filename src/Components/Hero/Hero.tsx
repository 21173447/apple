
import React, { useRef, useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import vid from "../video/Apple.webm"


const Hero : React.FC = () => {
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

   <div>
        <section className='flex justify-center items-center fixed   w-full h-[50rem] bg-grey-200 text-black'>  
        <div className='absolute text-center mb-72 space-y-5'>
           <h1 className='text-6xl font-bold'>iPhone 16<span>e</span></h1>
           <h2 className='text-3xl'>Latest iPhone.GreatPrice.</h2>
           <p className="text-2xl text-thin first-letter: text-gray-500 ">Available starting 2.28</p>
  
        <div className='flex justify-center gap-3'>
           <button className='bg-blue-600 text-white px-8 py-2 rounded-full  '>Learn more</button>
           <button className='border border-blue-600 text-blue-600 px-8 py-3 rounded-full '>Buy</button>
           </div>
        </div>
       <div className='w-full h-full pt-56 overflow-hidden flex justify-center items-center'>

       <video
       src={vid}
       autoPlay
       muted
       ref={vidRef}
       className=""
      ></video>
    

       </div>
 
    <div>
           <button
                onClick={handlePlayPause}
                className="absolute bottom-[-5%] right-10 bg-gray-300 p-5 rounded-full"
              >
                {isPlaying ? <FaPause size={10} /> : <FaPlay size={10} />}
              </button>
       </div>

       
   </section>



 </div>
  )
}

export default Hero
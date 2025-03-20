import React, { useEffect } from 'react';
import img1 from "../Images/Convyer/BG.jpg";
import img2 from "../Images/Convyer/EL.jpeg";
import img3 from "../Images/Convyer/417x236 (1).jpg";
import img4 from "../Images/Convyer/417x236 (3).jpg";
import img5 from "../Images/Convyer/417x236.jpg";
import img6 from "../Images/Convyer/417x236 (2).jpg";

import AOS from "aos";
import "aos/dist/aos.css";

const images = [img1, img2, img3, img4, img5, img6];
const buttonLabels = ["Listen Now", "Listen Now", "Play now", "Watch now", "View More","Play Now"];
const ConveyorBelt: React.FC = () => {

  useEffect(() => {
    AOS.init();
  }, []);
  
  return (
    <div className="conveyor-belt-container overflow-hidden pt-2 space-y-3 mb-16 ">
      <div className="conveyor-belt flex gap-x-4">
        {images.concat(images).map((img, index) => (
          <div key={index} className="relative flex-shrink-0">
            <img src={img} alt={`Item ${index + 1}`} className="w-full h-full object-contain" />
            <div className="overlay absolute top-0 left-0 w-full h-full bg-black opacity-0 hover:opacity-50 transition-all duration-500">
              <div className="text text-white text-center w-full h-full flex justify-center items-center">
                <button
                  className="bg-white text-black p-2 w-24 text-sm rounded-full"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="1000"
                >
                  
                  {buttonLabels[index % buttonLabels.length]}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    
  );
};

export default ConveyorBelt;

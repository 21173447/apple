import React from 'react';
import img1 from "../../Images/hero_iphoe-lgscreen.jpg";


const Hero1: React.FC = () => {
  return (
    <section className='flex justify-center items-center w-full h-[40rem] bg-black text-white'>
        
         <div className='absolute text-center mb-72 space-y-3'>
            <h1 className='text-6xl font-bold '>iPhone 16 Pro</h1>
            <h2 className='text-3xl'>Hello,Apple Intelligence</h2>
   
       <div className='flex justify-center gap-3'>
            <button className='bg-blue-600 text-white px-8 py-2 rounded-full  '>Learn more</button>
            <button className='border border-blue-600 text-blue-600 px-8 py-3 rounded-full '>Buy</button>
            </div>
         </div>
        <div className='w-full h-full overflow-hidden flex justify-center items-center'>
            <img src={img1} className=' h-[140%] object-cover' />
        </div>
        <div>
         

        </div>

    </section>
  );
};

export default Hero1;

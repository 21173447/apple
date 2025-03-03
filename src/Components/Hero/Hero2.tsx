import React from 'react';
import img1 from "../../Images/hero_iphone16_avail__euwzls69btea_largetall_2x.jpg";

const Hero2: React.FC = () => {
  return (
    <section className='flex justify-center items-center w-full h-[40rem] bg-white text-white'> 
         <div className='absolute text-center mb-96 space-y-3'>
            <h1 className='text-6xl font-bold '>iPhone 16 </h1>
            <h2 className='text-3xl'>Hello,Apple Intelligence</h2>
            <div className='flex justify-center gap-3'>
            <button className='bg-white text-black px-8 py-2 rounded-full  '>Learn more</button>
            <button className='border border-white text-white px-8 py-3 rounded-full '>Buy</button>
            </div>
            </div>
             <div className='w-full h-full overflow-hidden flex justify-center items-center'>
            <img src={img1} className=' h-[96%] object-cover' />
        </div>
    </section>

  );
};

export default Hero2;

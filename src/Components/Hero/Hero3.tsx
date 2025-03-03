import React from 'react';
import img2 from "../../Images/hero_airpods_pro2__fjrggbj9imuu_small.jpg"
const Hero3: React.FC = () => {
  
  return (
    <section className='flex justify-center items-center w-full h-[50rem] bg-black text-white'> 
        
        <div className='w-full h-full overflow-hidden flex justify-center items-center'>
            <img src={img2} className=' h-[111%] w-[100] object-cover' />
        </div>

        <div className='absolute text-center mt-[16%] space-y-5 pt-10'>

        <h3 className='text-white ont-thin text-7xl text-bold'>AirPods Pro2</h3>
       <h1 className='text-white text-bold text-3xl'>Now with a Hearing Aid feature. </h1>

       <div className='flex justify-center gap-3'>
       <button className='bg-blue-600 text-white px-8 py-2 rounded-full  '>Learn more</button>
       <button className='border border-blue-600 text-blue-600 px-8 py-3 rounded-full '>Buy</button>
 </div>
</div>
    </section>
  );
};

export default Hero3;





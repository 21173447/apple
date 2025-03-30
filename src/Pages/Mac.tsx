import React from 'react'
import Icons from '../Components/MacComponents/icons'
import Tagline from '../Components/MacComponents/tagline'
import HeroVid from '../Components/MacComponents/HeroVid'
import Carousel from '../Components/MacComponents/carousel'



const Mac:React.FC = () => {
  return (
 <section className='h-[500vh] pt-14'>
    <Icons />
    <Tagline/>
 <div>
  <div className='flex justify-between pt-10  px-28'>
  <h1 className='text-7xl font-semibold'>Mac</h1>
  <div className='font-semibold text-2xl pt-10'>
   <h1 className='text-3xl  px-2'>If you can dream it,</h1> 
    <h1 className='text-3xl  px-2'>Mac can do it.</h1>
   </div>
   </div>
    <div className='pt-20' >
      <HeroVid />
    </div>
    <div className="flex font-semibold text-6xl py-20 ml-24">
        Get to know Mac
       </div>
    </div>
    <Carousel/>
</section>
  )
}

export default Mac
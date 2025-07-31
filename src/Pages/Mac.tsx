import React from 'react'
import Icons from '../Components/MacComponents/icons'
import Tagline from '../Components/MacComponents/tagline'
import HeroVid from '../Components/MacComponents/HeroVid'
import Carousel from '../Components/MacComponents/carousel'
import Advert from '../Components/MacComponents/Advert'




const Mac: React.FC = () => {
  return (
    <section className='h-[500vh] pt-14'>
      <Icons/>
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
          <HeroVid/>
        </div>
        <div className="flex font-semibold text-6xl py-20 ml-24">
          Get to know Mac
        </div>
      </div>
      <Carousel/>
      <div className="flex font-semibold text-6xl py-20 ml-24">
        Help me choose.
      </div>

      <div className='w-[90%] mx-auto'>
        <Advert />
      </div>
  
      <div className="flex justify-between items-center px-24 py-20">
        <div className="font-semibold text-6xl">
          Explore the  lineup
        </div>

        <div className="flex  gap-5 text-right">
          <a className="text-blue-500 hover:underline  text-lg" href="">Help me choose &gt;</a>
          <a className="text-blue-500 hover:underline text-lg " href="">Compare all models &gt;</a>
        </div>
      </div>
    </section>

  )
}
export default Mac

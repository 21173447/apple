import React from 'react'
import img1 from "../Images/Gridimg/hero_apple_watch_series_10_avail_lte__esu66gaw6dci_largetall_2x.jpg"
import img2 from "../Images/Gridimg/promo_iphone_tradein__bugw15ka691e_large.jpg"
import img3 from "../Images/Gridimg/promo_ipad__fioegapg12qi_large.jpg"
import img4 from "../Images/hero_airpods_pro2__fjrggbj9imuu_small.jpg"
import img5 from "../Images/Gridimg/promo_macstudio_announce__fljoad5gaci2_large.jpg"
import img6 from "../Images/Gridimg/promo_apple_card__5cm7draujpey_medium.jpg"
import img7 from "../Images/Gridimg/hero_logo_apple_watch_series_10__dla4dkv1wfue_largetall_2x.png"


const Grid: React.FC = () => {
  return (
    <section className="h-[95rem] mb-3">
    <div className="grid grid-cols-2 md:grid-cols-2 grid-rows-3 gap-3  h-full">
      <div className="w-full flex items-center justify-center">
        <div className="w-full h-full relative bg-black">
          <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center mb-24 space-y-3">
            <img className="w-36" src={img7} alt="Logo" />
            <div className="flex justify-center gap-3">
              <button className="bg-blue-600 text-white p-1 w-40 rounded-full">Learn more</button>
              <button className="border border-blue-600 text-blue-600 px-8 py-2 rounded-full">Buy</button>
            </div>
          </div>
          <img src={img2} alt="iPhone" className="w-full h-full object-cover" />
        </div>
      </div>
 
      <div className="w-full h-full flex items-center justify-center ">
        <img src={img1} alt="Apple Watch" className="w-full h-full object-cover" />
      </div>
      <div className="w-full h-full flex items-center justify-center ">
        <img src={img3} alt="iPad Pro" className="w-full h-full object-cover" />
      </div>
      <div className="w-full h-full flex items-center justify-center ">
        <img src={img5} alt="MacBook Pro" className="w-full h-[100%] " />
      </div>
      <div className="w-full h-full flex items-center justify-center bg-black overflow-hidden">
        <img src={img2} alt="iPhone Trade-In" className=" h-[115%] " />
      </div>
      <div className="w-full h-full flex items-center justify-center bg-gray-100 overflow-hidden">
        <img src={img6} alt="Apple Card" className=" h-[115%] mb-20 " />
      </div>
    </div>
  </section>
  
  )
}

export default Grid


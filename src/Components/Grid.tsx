import React from 'react'
import img1 from "../Images/Gridimg/promo_iphone16_avail__cl72dn7xdfv6_medium.jpg"
import img2 from "../Images/Gridimg/promo_apple_watch_series_10_avail_lte__c70y29goir42_medium.jpg"
import img3 from "../Images/Gridimg/promo_ipadpro_avail__s271j89g8kii_medium.jpg"
import img4  from "../Images/Gridimg/promo_macbookpro_announce__gdf98j6tj2ie_medium.jpg"
import img5 from "../Images/Gridimg/promo_iphone_tradein__bugw15ka691e_medium.jpg"
import img6 from "../Images/Gridimg/promo_apple_card__5cm7draujpey_medium.jpg"

const Grid : React.FC = () => {
  return (
    <section className="h-[100vh]   p-3">
    <div className="grid grid-cols-2  w-[] grid-rows-3 gap-4">
      
      <div className="w-[75%]">
        <div className='w-[140%] '>
        <img src={img1} alt="" className="w-full h-full object-cover" />
        </div>
      </div>

      <div className="w-full h-full">
        <img src={img2} alt="" className="w-[100%] h-full  object-cover" />
      </div>

      <div className="w-full h-full">
        <img src={img3} alt="" className="w-full h-full object-cover" />
      </div>

      <div className="w-full h-full">
        <img src={img4} alt="" className="w-full h-full object-cover" />
      </div>
  
      <div className="w-full h-full">
        <img src={img5} alt="" className="w-full h-full object-cover" />
      </div>
  
      <div className="w-full h-full">
        <img src={img6} alt="" className="w-full h-full object-cover" />
      </div>
    </div>
  </section>
  
  )
}

export default Grid

import React from 'react';
import img1 from "../Images/Gridimg/promo_ipad_air__bfbxzvw65c02_large_2x.jpg";
import img2 from "../Images/Gridimg/promo_macbook_air_avail__e8ksaudoisey_large_2x.jpg";
import img3 from "../Images/Gridimg/promo_apple_watch_series_10_avail_lte__c70y29goir42_large_2x.jpg";
import img5 from "../Images/Gridimg/promo_airpods_pro_2_avail__vkitqi3okwie_large_2x.jpg";
import img6 from "../Images/Gridimg/promo_apple_card__5cm7draujpey_medium.jpg";
import img7 from "../Images/Gridimg/hero_logo_apple_watch_series_10__dla4dkv1wfue_largetall_2x.png";
import img8 from "../Images/Gridimg/promo_iphone_tradein__bugw15ka691e_large.jpg";    
const Grid: React.FC = () => {
  return (
    <section className="h-[100rem]  mb-5 px-3">
      <div className="grid grid-cols-2 md:grid-cols-2 grid-rows-3 gap-3 h-full">
        {/* Item 1 */}
        <div className="w-full h-full relative bg-black">
          <img src={img1} alt="iPhone" className="w-full h-full object-cover" />
          <div className="absolute inset-0  flex flex-col justify-center items-center space-y-3 mb-80">
            <img className="w-36" src={img7} alt="Logo" />
            <div className="flex gap-3">
              <button className="bg-blue-600 text-white py-2 px-6 rounded-full">Learn more</button>
              <button className="border border-blue-600 text-blue-600 py-2 px-6 rounded-full">Buy</button>
            </div>
          </div>
        </div>

        {/* Item 2 */}
        <div className="w-full h-full">
          <img src={img2} alt="Apple Watch" className="w-full h-full object-cover" />
        </div>

        {/* Item 3 */}
        
        
        <div className="w-full h-full relative bg-black">
          <img src={img3} alt="iPhone" className="w-full h-full object-cover" />
          <div className="absolute inset-0  flex flex-col justify-center items-center space-y-3 mb-80">
            <img className="w-36" src={img7} alt="Logo" />
            <div className="flex gap-3">
              <button className="bg-blue-600 text-white py-2 px-6 rounded-full">Learn more</button>
              <button className="border border-blue-600 text-blue-600 py-2 px-6 rounded-full">Buy</button>
            </div>
          </div>
        </div>

        {/* Item 4 */}
        <div className="w-full h-full">
          <img src={img5} alt="MacBook Pro" className="w-full h-full object-cover" />
        </div>

        {/* Item 5 */}
        <div className="w-full h-full bg-black">
          <img src={img8} alt="iPhone Trade-In" className="h-full" />
        </div>

        {/* Item 6 */}
   {/* Item 6 */}
<div className="w-full h-full flex justify-center items-center bg-gray-100 overflow-hidden">
  <img
    src={img6}
    alt="Apple Card"
    className="w-[70%] max-w-7xl h-auto object-contain transform -translate-y-10"
  />
</div>


      </div>
    </section>
  );
};

export default Grid;

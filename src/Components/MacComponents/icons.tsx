import React from 'react'
import svg1 from '../MacComponents/macIcons/macbookair_light__dfypt7o3xfgy_large.svg'
import svg2 from '../MacComponents/macIcons/macbook_pro_light__bvnmtmeikj1e_large (1).svg'
import svg3 from '../MacComponents/macIcons/imac_light__cx5ex9nbqxme_large.svg'
import svg4 from '../MacComponents/macIcons/mac_mini_light__e7ojhup2ezau_large.svg'
import svg5 from '../MacComponents/macIcons/mac_studio_light__fcr3455qk0i2_large.svg'
import svg6 from '../MacComponents/macIcons/mac_pro_light__bly2b0ua4seq_large.svg'
import svg7 from '../MacComponents/macIcons/hmc_light__fq8mh4xb68mm_large.svg'
import svg8 from '../MacComponents/macIcons/mac_compare_light__capy8s4wrbhy_large.svg'
import svg9 from '../MacComponents/macIcons/displays_light__d67yrnk0qsa6_large.svg'
import svg10 from '../MacComponents/macIcons/mac_accessories_light__esnwbnk4bxqq_large.svg'
import svg11 from '../MacComponents/macIcons/mac_os_light__6mb5pqhztcie_large.svg'
import svg12 from '../MacComponents/macIcons/mac_shop_light__f0m72gc7jguq_large.svg'

const iconsData = [
  { src: svg1, text: "MacBook Air" },
  { src: svg2, text: "MacBook Pro" },
  { src: svg3, text: "iMac" },
  { src: svg4, text: "Mac Mini" },
  { src: svg5, text: "Mac Studio" },
  { src: svg6, text: "Mac Pro" },
  { src: svg7, text: "Mac Home" },
  { src: svg8, text: "Compare Mac" },
  { src: svg9, text: "Displays" },
  { src: svg10, text: "Accessories" },
  { src: svg11, text: "macOS" },
  { src: svg12, text: "Mac Shop" }
];

const Icons: React.FC = () => {
  return (
    <section className="flex justify-center  py-3">
      <div className="flex justify-center space-x-10">
        {iconsData.map((icon, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <img className="" src={icon.src} alt={icon.text} />
            <p className="text-sm mt-2">{icon.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Icons;

import React, { useState } from "react";
import { FaApple } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { IoBagOutline } from "react-icons/io5";

const NavBar: React.FC = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const menuItems = [
    { name: "Store", dropdown: ["Shop", "Mac", "iPhone", "iPad"] },
    { name: "Mac", dropdown: ["MacBook Air", "MacBook Pro", "iMac", "Mac Mini"] },
    { name: "iPad", dropdown: ["iPad Pro", "iPad Air", "iPad Mini"] },  
    

  ];

  return (
    <div className="relative">
      <ul className="flex justify-center gap-11 fixed w-full items-center p-3 text-xs bg-white bg-opacity-80 backdrop-blur-sm text-black z-50">
        <FaApple className="text-lg" />
        {menuItems.map((item) => (
          <li
            key={item.name}
            className="relative group"
            onMouseEnter={() => setHoveredItem(item.name)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            {item.name}
          </li>
        ))}

        <li>Watch</li>
        <li>Vision</li> 
        <li>TV & Home</li>
        <li>Entertainment</li>
        <li>Accessories</li>
        <li>Support</li>
        <IoIosSearch className="text-lg" />
        <IoBagOutline className="text-lg" />
      </ul>

      {hoveredItem && (
        <div
          className="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-30 backdrop-blur-md z-40"
          onMouseEnter={() => setHoveredItem(null)}
        >
          <div className="w-full h-1/2 bg-white p-8 shadow-lg">
            <ul className="mt-10   gap-11">
              {menuItems
                .find((item) => item.name === hoveredItem)
                ?.dropdown.map((subItem) => (
                  <li key={subItem} className="p-2 hover:bg-gray-200 cursor-pointer">
                    {subItem}
                  </li>
                ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;

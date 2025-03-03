import React from 'react'
import { FaApple } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { IoBagOutline } from "react-icons/io5";




const NavBar : React.FC =() => {
  return (
    <div>
        <ul className='flex justify-center gap-11  fixed w-full items-center p-5 text-md bg-white bg-opacity-80 backdrop-blur-sm  text-black  '>
         <FaApple className='text-lg' />
            <li>Store</li>
            <li>Mac</li>
            <li>iPad</li>
            <li>Watch</li>
            <li>Vison</li>
            <li>TV & Home </li>
            <li>Entainement</li>
            <li>Accessories</li>
            <li>Support</li>
          
            <IoIosSearch className='text-lg' />
            <IoBagOutline className='text-lg' />
        </ul>
    </div>
  )
}

export default NavBar
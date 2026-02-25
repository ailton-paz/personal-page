import Link from 'next/link';
import { MdDeveloperMode } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { PiBookOpenText } from 'react-icons/pi';

export default function SideNav() {
    return (
    
      <div className='flex md:flex-col justify-between items-center p-5'>

        <div 
        className='flex items-center justify-center w-15 aspect-square bg-orange-100 border-2 border-black shadow-[3px_3px_0px] shadow-black'>
          <MdDeveloperMode size={25}/>
        </div>

        <div className='flex md:flex-col gap-x-2'>
          <a 
          href="/"
          className='flex items-center justify-center w-15 aspect-square bg-orange-100 border-3 border-white'>
            <FaHome size={25}/>
            <p className='hidden md:block'>Home</p>
          </a>

          <a 
          href="/posts"
          className='flex items-center justify-center w-15 aspect-square bg-orange-100 border-3 border-white'>
          <PiBookOpenText size={25}/>
          <p className='hidden md:block'>Postss</p>
          </a>
        </div>

      </div>
    
  );
}
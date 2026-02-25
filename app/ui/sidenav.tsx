import Link from 'next/link';
import { MdDeveloperMode } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { PiBookOpenText } from 'react-icons/pi';

export default function SideNav() {
    return (
    
      <div className='flex md:flex-col h-full justify-between md:justify-start md:w-full items-center md:items-start md:gap-y-10 p-5'>

        <div className='flex items-center gap-x-5'>
        <div 
        className='flex items-center justify-center w-15 aspect-square bg-orange-100 border-2 border-black shadow-[3px_3px_0px] shadow-black'>
          <MdDeveloperMode size={25}/>
        </div>
        <p className='hidden md:block text-[24px] font-bold'>APP</p>
        </div>

        <div className='flex md:flex-col gap-2 md:w-full'>
          <a 
          href="/"
          className='flex items-center justify-center md:justify-start md:gap-2 md:p-2 w-15 md:w-full aspect-square md:h-10 bg-orange-100 md:bg-transparent md:hover:bg-orange-100 md:border-none border-3 border-white transition-colors duration-150 ease-in-out md:rounded-md'>
            <FaHome size={25}/>
            <p className='hidden md:block'>Home</p>
          </a>

          <a 
          href="/posts"
          className='flex items-center justify-center md:justify-start md:gap-2 md:p-2 w-15 md:w-full aspect-square md:h-10 bg-orange-100 md:bg-transparent md:hover:bg-orange-100 md:border-none border-3 border-white transition-colors duration-150 ease-in-out md:rounded-md'>
          <PiBookOpenText size={25}/>
          <p className='hidden md:block'>Posts</p>
          </a>
        </div>

      </div>
    
  );
}

import React, { useState } from 'react';
import Link from 'next/link';
import { BsArrowLeftShort } from 'react-icons/bs';
import { CgProfile } from "react-icons/cg";

import { MdOutlineCreateNewFolder } from "react-icons/md";
import { LuFolders } from "react-icons/lu";
const Sidebar: React.FC = () => {
  const [open,setOpen]=useState(true);
  
 
  
  return (<div>
    <div className={`bg-white text-black h-screen mb-12 p-4 pt-8 border border-gray-300 ${open ? "w-72" : "w-20 p-4"} duration-400 relative`}>
    <BsArrowLeftShort
      className={`bg-white text-black text-3xl rounded-full absolute -right-3 top-9 border border-gray-400 cursor-pointer ${!open &&"rotate-180"}`}
      onClick={() => setOpen(!open)}/><div className='flex flex-col items-start'>
      <Link href="/yoursubjects" className="block py-4 inline-flex">
       <LuFolders className='text-4xl mr-6 flex-shrink-0 '/>
       <button className={`text-2xl ${!open && "scale-0"}`}> Your subjects </button>
      </Link>
      <Link href="/createsubject" className="block py-4 inline-flex">
       <MdOutlineCreateNewFolder className='text-4xl mr-6 flex-shrink-0'/>
       <button className={`text-2xl ${!open && "scale-0"}`}> Create subject </button>
      </Link>
      <Link href="/profile" className="block py-4 inline-flex">
       <CgProfile className='text-4xl mr-6 flex-shrink-0'/>
       <button className={`text-2xl ${!open && "scale-0"}`}> User Profile </button>
      </Link>

      </div>
      </div>
      </div>
  );
  
};

export default Sidebar;
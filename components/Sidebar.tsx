
import React, { useState } from 'react';
import Link from 'next/link';
import { BsArrowLeftShort } from 'react-icons/bs';
import { CgProfile } from "react-icons/cg";

import { MdOutlineCreateNewFolder } from "react-icons/md";
import { LuFolders } from "react-icons/lu";
const Sidebar: React.FC = () => {
const [selected,setSelected ]=useState<string>('Yoursubjects');
const handleclick=(item:string)=>{
 setSelected(item);
}
  
  return (
    <div>
      
      <aside className="w-64 p-4  ">
        
        <nav className="space-y-4 pt-4">
          <a href="/yoursubjects" className={`flex items-center rounded-lg p-3 space-x-4 text-gray-900 hover:bg-gray-200 ${selected === 'Yoursubjects' ? 'bg-gray-100' : 'bg-white'}`} onClick={() => handleclick('Yoursubjects')}>
          <LuFolders></LuFolders>
            <span>Yoursubjects</span>
          </a>
          <a href="/createsubjects" className={`flex items-center rounded-lg p-3 space-x-4 text-gray-900 hover:bg-gray-200 ${selected === 'Createsubjects' ? 'bg-gray-100' : 'bg-white'}`} onClick={() => handleclick('Createsubjects')}>
          <MdOutlineCreateNewFolder></MdOutlineCreateNewFolder>
            <span>Create subjects</span>
          </a>
          <a href="/chatwithpdf" className={`flex items-center rounded-lg p-3 space-x-4 text-gray-900 hover:bg-gray-200 ${selected === 'CWP' ? 'bg-gray-100' : 'bg-white'}`} onClick={() => handleclick('CWP')}>
            
            <span>Chat with PDF</span>
          </a>
          <a href="profile" className={`flex items-center rounded-lg p-3 space-x-4 text-gray-900 hover:bg-gray-200 ${selected === 'Profile' ? 'bg-gray-100' : 'bg-white'}`} onClick={() => handleclick('Profile')}>
            <CgProfile></CgProfile>
            <span>Profile</span>
          </a>
    
        </nav>
      </aside>
    </div>
  );
};

export default Sidebar;

import React, { useState } from 'react';
import Link from 'next/link';
import { BsArrowLeftShort } from 'react-icons/bs';
import { CgProfile } from "react-icons/cg";

import { MdOutlineCreateNewFolder } from "react-icons/md";
import { LuFolders } from "react-icons/lu";
const Sidebar: React.FC = () => {
  const [open, setOpen] = useState(true);
  
  return (
    <div>
      
      <aside className="w-64 p-4 ">
        
        <nav className="space-y-4">
          <a href="#" className="flex items-center space-x-2 text-gray-900">
            
            <span>Overview</span>
          </a>
          <a href="#" className="flex items-center space-x-2 text-gray-900">
          
            <span>Files</span>
          </a>
          <a href="#" className="flex items-center space-x-2 text-gray-900">
            
            <span>API Keys</span>
          </a>
          <a href="#" className="flex items-center space-x-2 text-gray-900">
            
            <span>Plans & Billing</span>
          </a>
          <a href="#" className="flex items-center space-x-2 text-gray-900">
            
            <span>Settings</span>
          </a>
        </nav>
      </aside>
    </div>
  );
};

export default Sidebar;
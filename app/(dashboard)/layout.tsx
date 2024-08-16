"use client"
import {  signOut, useSession } from 'next-auth/react';
import { Sidebar,SidebarBody,SidebarLink } from '@/components/Sibebar';

import { useState } from 'react';
import {IconSearch,
  IconFile,
  IconFilePencil,
  IconArrowLeft,
 IconFileTextAi,
  IconUser

} from "@tabler/icons-react";
import { motion } from "framer-motion";
import Image from 'next/image';
import Link from 'next/link';
import {cn} from '../../utils/cn';

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {

  const handleSignOut = async () => {
    await signOut();
    window.location.href = '/';
  
  };
  const links = [
    {
      label: "Your Subjects",
      href: "/yoursubjects",
      icon: (
        <IconFile className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Create Subject",
      href: "/createsubject",
      icon: (
        <IconFilePencil className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Explore Subjects",
      href: "/explore",
      icon: (
        <IconSearch className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Chat with Pdf",
      href: "/chatwithpdf",
      icon: (
        <IconFileTextAi className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Profile",
      href: "/profile",
      icon: (
        <IconUser className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
  ];
  const { data: session, status } = useSession();
  const [open, setOpen] = useState(false);
    

  return (
   
    <div className={cn(
      "rounded-md flex flex-col md:flex-row w-full flex-1 max-w-[120rem] mx-auto border border-neutral-200 dark:border-neutral-700 overflow-hidden",
      "h-screen" 
    )} >

        <Sidebar open={open} setOpen={setOpen} >
          <SidebarBody className="justify-between gap-10">
            <div className="flex flex-col flex-1 overflow-y-auto">
              <Logo />
              <div className="mt-8 flex flex-col gap-2">
                {links.map((link, idx) => (
                  <SidebarLink key={idx} link={link} />
                ))}
              </div>
              <div  className='mt-2'>
                <button onClick={(handleSignOut)}>
           <div className='flex items-center justify-start gap-2  group/sidebar py-2'>
           <IconArrowLeft className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
           <div className=' text-neutral-700 dark:text-neutral-200 text-sm group-hover/sidebar:translate-x-1 transition duration-150 whitespace-pre inline-block !p-0 !m-0'>
            Sign out
           </div>
           </div>
           
                </button>
              </div>
            </div>
            <div>
              <SidebarLink
                link={{
                  label: session?.user?.name ?? "",
                  href: "/profile",
                  icon: (
                    <Image
                      src={session?.user?.image ?? ""}
                      className="h-7 w-7 flex-shrink-0 rounded-full"
                      width={50}
                      height={50}
                      alt="Avatar"
                    />
                  ),
                }}
              />
            </div>
           
          </SidebarBody>
          
        </Sidebar>
        <main
      className={`flex-1 p-4 transition-all duration-300 ${
        open ? 'ml-[300px]' : 'ml-0'
      }`}
    >
      {children}
    </main>
        
      </div>
    
  );
}
export const LogoIcon = () => {
  return (
    <Link
      href="#"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
    </Link>
  );
};
export const Logo = () => {
  return (
    <Link
      href="#"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium text-black dark:text-white whitespace-pre"
      >
        OurNotes
        
      </motion.span>
      
    </Link>
  );
};


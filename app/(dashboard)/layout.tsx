"use client"
import {  useSession } from 'next-auth/react';
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
    const{data:session,status}= useSession();
  return ( <div>
    <Navbar name={session?.user?.name} email={session?.user?.email} imagesrc={session?.user?.image} />
    <div className="flex h-screen">
        <Sidebar />
        
        <main className="flex-1 p-4">
            {children}
        </main>
    </div>
</div>
    
  );
}



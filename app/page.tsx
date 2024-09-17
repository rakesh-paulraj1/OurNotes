"use client";
import React from 'react'
import { LampContainer } from '@/components/ui/lamp';
import { motion } from "framer-motion";
import Button from '@/components/Button';
import { signIn } from 'next-auth/react';
import { redirect } from 'next/navigation'
import { useSession } from 'next-auth/react';

const  Homepage =  () => {
  const { data: session } = useSession();
  if(session){
    redirect('/dashboard/explore');
  }
  return (<div className="text text-1xl pt-16 bg-slate-950">
    <LampContainer>
      <motion.h1 
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-16 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        Our Notes <br /> store the notes here
        <div className="text text-2xl pt-4">
          You can sign up with Google <br />
        </div>
        <Button onClick={() => signIn()}> Sign up with google</Button>
      </motion.h1>
     
    </LampContainer>
  </div>
  
  )
}


export default Homepage

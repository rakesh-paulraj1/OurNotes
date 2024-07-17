'use client';

import { signOut, useSession } from 'next-auth/react';
import { UploadButton } from "../../../utils/uploadthing"
import { BentoGrid,BentoGridItem } from '@/components/ui/bento-grid';
import { motion } from "framer-motion";
import { ImConfused } from 'react-icons/im';
import { cn } from '@/utils/cn';
export default function Dashboard() {
const{data:session,status}= useSession();
const SkeletonThree = () => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={variants}
      transition={{
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse",
      }}
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] rounded-lg bg-dot-black/[0.2] flex-col space-y-2"
      style={{
        background:
          "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
        backgroundSize: "400% 400%",
      }}
    >ksjbdf
      <motion.div className="h-full w-full rounded-lg"></motion.div>
    </motion.div>
  );
};
  return (
     (
      <div>
<button onClick={()=>signOut()}>signout</button>

<main className="flex min-h-screen flex-col items-center justify-between p-24">
      
      
      <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
      
        <BentoGridItem
      
          title={"Contextual Suggestions"}
          description={<span className="text-sm">
            Get AI-powered suggestions based on your writing context.
          </span>}
          header={<SkeletonThree />}
          className={cn("[&>p:text-lg]", "md:col-span-1")}
          icon={<ImConfused className="h-4 w-4 text-neutral-500" />}
        />
      
    </BentoGrid>

    </main>


      </div>
    )
  );
}

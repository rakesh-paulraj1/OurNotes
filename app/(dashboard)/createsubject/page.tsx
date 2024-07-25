"use client"
import React from 'react'
import { Label } from '@/components/ui/label';
 import { Input } from '@/components/ui/input';
 import { cn } from '@/utils/cn';

const Createsubjects = () => {
  
  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
    <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
     Create a Subject and Upload the Notes here 

    </h2>
    <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
      *Note the file should not exceed 4MB you can resize the file here 
    </p>

    <form className="my-8" >
      
        <LabelInputContainer className='mb-4'>
          <Label htmlFor="firstname">Subject name</Label>
          <Input id="firstname" placeholder="eg: Computer Networks" type="text" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
    <Label htmlFor="dropdown">Subject Department</Label>
    <select  id="dropdown" className={cn(
            `flex h-10 w-full border-none bg-gray-50 dark:bg-zinc-800 text-black dark:text-white shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent 
          file:text-sm file:font-medium placeholder:text-neutral-400 dark:placeholder-text-neutral-600 
          focus-visible:outline-none focus-visible:ring-[2px]  focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600
           disabled:cursor-not-allowed disabled:opacity-50
           dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
           group-hover/input:shadow-none transition duration-400 mb-4
           `
          )}>
      <option value="Computer Science">Computer Science</option>
      <option value="Electronics and Communication Engineering">Electronics and Communication Engineering</option>
      <option value="Cyber Security">Cyber Security</option>
      <option value="Bio Technology">Bio Technology</option>
   
    </select>
   
  </LabelInputContainer>
     
      <LabelInputContainer className="mb-4">
        <Label htmlFor="file">Initial File</Label>
        <Input id="file"  type="file" />
      </LabelInputContainer>


      <button
        className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
        type="submit"
      >
        Upload File &rarr;
        <BottomGradient />
      </button>
      

    </form>
    
   
  </div>
  )
}
const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};
 
const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

export default Createsubjects
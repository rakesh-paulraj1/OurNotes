"use client";
import React, { useState } from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { cn } from '@/utils/cn';
import axios from 'axios';
import { Toaster,toast } from 'sonner';

const Createsubjects = () => {
  const [file, setFile] = useState<File | null>(null);
  const [subjectname, setSubjectname] = useState<string>('');
  const [department, setDepartment] = useState<string>('');
  const [uploading, setUploading] = useState<boolean>(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      setFile(e.target.files[0]);
      
    }

  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file || !subjectname || !department) return;
    setUploading(true);
    const formData = new FormData();
    formData.append('file', file);
  
    formData.append('subjectname', subjectname);
    formData.append('department', department);
  const loadingtoast=toast.loading('Creating the subject...')
    try {
      const response = await fetch("/api/subject/newsubject", { method: "POST", body: formData });
      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();
      const { uploadUrl, key } = data;
      const File= formData.get("file")
   
      await axios.put(uploadUrl,File,{headers: {
        'Content-Type': file.type,
      },});
      await fetch(uploadUrl,{method:"PUT",body:File})
      setUploading(false);
      toast.success('Subject created  successfully');
    } catch (error) {
      setUploading(false);
      toast.error('Error Creating Subject');
    }finally{
      toast.dismiss(loadingtoast)
    }
  };

  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        Create a Subject and Upload the Notes here
      </h2>
      <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
        *Note the file should not exceed 4MB you can resize the file here
      </p>

      <form className="my-8" onSubmit={handleSubmit}>
        <LabelInputContainer className='mb-4'>
          <Label htmlFor="subjectname">Subject name</Label>
          <Input
            id="subjectname"
            placeholder="eg: Computer Networks"
            type="text"
            value={subjectname}
            onChange={(e) => setSubjectname(e.target.value)}
          />
        </LabelInputContainer>
        
        <LabelInputContainer className="mb-4">
          <Label htmlFor="department">Subject Department</Label>
          <select
            id="department"
            name="department"
            className={cn(
              `flex h-10 w-full border-none bg-gray-50 dark:bg-zinc-800 text-black dark:text-white shadow-input rounded-md px-3 py-2 text-sm placeholder:text-neutral-400 dark:placeholder-text-neutral-600
              focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600
              disabled:cursor-not-allowed disabled:opacity-50
              dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
              group-hover/input:shadow-none transition duration-400 mb-4`
            )}
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
          >
            <option value="0">Select a  Department</option>
            <option value="1">Computer Science</option>
            <option value="2">Electronics and Communication Engineering</option>
            <option value="3">Electrical and Electronics</option>
            <option value="5">Cyber Security</option>
            <option value="4">Bio Technology</option>
          </select>
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="file">Initial File</Label>
          <Input
            id="file"
            type="file"
            onChange={handleFileChange}
          />
        </LabelInputContainer>

        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          {uploading ? "Uploading..." : "Upload"}
          &rarr;
          <BottomGradient />
        </button>
      </form>
      <Toaster position="top-center"richColors />
    </div>
  );
};

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

export default Createsubjects;

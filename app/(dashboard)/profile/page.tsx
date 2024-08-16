"use client"
interface User {
  name: string | number | bigint | boolean | React.ReactElement | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined;
}
interface Department {
  name: string | number | bigint | boolean | React.ReactElement | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined;
}
interface Subject {
  id: React.Key | null | undefined;
  user: User;
  department: Department;
  name: string;
}
import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { useState,useEffect } from 'react';
import { BentoGrid,BentoGridItem } from '@/components/ui/bento-grid';
import { useSession } from 'next-auth/react'
import { motion } from "framer-motion";
import { FaUserAlt } from "react-icons/fa";
import { MdOutlineClass } from "react-icons/md";
const Profile = () => {
  const { data: session, status } = useSession();
  const [subjects, setSubjects] = useState<any>(null);
  const getsubjects = async () => {
    const response = await fetch("/api/subject/getusersubject", { method: "GET" });
    const data = await response.json();
   console.log(session);

    setSubjects(data.subject);
  };
  useEffect(() => {
    getsubjects();
  },[]);

  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };

  return (
    <div><div className="text-lg font-bold">
    Profile
  </div>
    <div className="container mx-auto p-4 flex flex-col md:flex-row">
     
  <div className="w-full md:w-1/2 md:pr-1">
    <div className="flex flex-col items-center gap-4 p-4 border rounded-lg shadow-md">
      <Image
        src={session?.user?.image ?? ""}
        className="w-24 h-24 rounded-full object-cover"
        width={96}
        height={96}
        alt="Avatar"
      />
      <div className="flex flex-col items-center">
        <h2 className="text-xl font-semibold">{session?.user?.name}</h2>
        <p className="text-gray-600">{session?.user?.email}</p>
      </div>
    </div>
  </div>
  <div className="w-full md:w-2/3 mt-4 md:mt-0">
    {subjects && subjects.length > 0 ? (
      subjects.map((subject: Subject) => (
        <div key={subject.id} className="col-span-1 md:col-span-1">
          <Link href={`/files/${subject.id}`}>
            <div>
              <BentoGrid className="max-w-4xl w-full md:auto-rows-[20rem]">
                <BentoGridItem
                  title={subject.user.name}
                  description={
                    <div className="flex items-center">
                      <MdOutlineClass className="h-4 w-4 text-neutral-500" />
                      <span className="text-sm ml-2">{subject.department.name}</span>
                    </div>
                  }
                  header={
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
                    >
                      <motion.div className="h-full w-full rounded-lg flex items-center justify-center">
                        <div className="text-center font-bold">{subject.name.toUpperCase()}</div>
                      </motion.div>
                    </motion.div>
                  }
                  className="md:col-span-1"
                  icon={<FaUserAlt className="h-4 w-4 text-neutral-500" />}
                />
              </BentoGrid>
            </div>
          </Link>
        </div>
      ))
    ) : (
      <div className="flex flex-col items-center p-4">
        <p className="text-gray-600 mb-4">No subjects available.</p>
        <Link href="/add-subject">
          <div className="px-6 py-2 bg-black text-white rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
            Add New Subject
          </div>
        </Link>
      </div>
    )}
  </div>
</div>
</div>
  )
}

export default Profile
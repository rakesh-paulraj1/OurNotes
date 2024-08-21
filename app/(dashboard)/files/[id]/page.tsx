import { PrismaClient } from "@prisma/client";
import Link from 'next/link';
import File from "@/components/file";
import { cookies } from 'next/headers'
import React, { useEffect } from "react";

const prisma = new PrismaClient();

 async function getfiles(id:string){

 const files=prisma.file.findMany({
    where: {
      subjectId: Number(id),
    },
    include: {
      subject: true,
    },
  })
 

  return files;
};


export default async function Filepage({params}: { params: { id: string } }) {
  const files = await getfiles(params.id);
  const cookieStore = cookies()
  const id = params.id;

 const userid=cookieStore.get('userId')
const fileuserid=files[0].userid;
  if (!id) {
    return <div>Loading...</div>;
  }

  const showuploadbutton=Number(fileuserid)===Number(userid?.value);
  return (
    <div>
  <div className="w-full max-w-4xl h-[80vh] overflow-auto">
      {files && files.map(file=>(<div key={file.id}>
        <File filename={file.filename} filekey={file.fileurl} fileuserid={file.userid} fileid={file.id} subjectid={file.subjectId}  />
        </div>
      ))}
      </div>
      {showuploadbutton && (
        <div>
      
        <div className="absolute bottom-6 right-6 flex items-center space-x-2">
       <Link href={`/files/newfile/${id}`}>
        <label  className="bg-gray-800 text-white px-4 py-2 rounded cursor-pointer shadow-md hover:bg-gray-1000">
            Upload File
        </label>
        </Link>
    </div>
        </div>
      )}
    
      
    </div>
  ); 
}

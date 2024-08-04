import { PrismaClient } from "@prisma/client";
import { GetObjectCommand } from "@aws-sdk/client-s3";
import File from "@/components/file";
import { NextRequest } from "next/server";

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
  
  const id = params.id;
 


  if (!id) {
    return <div>Loading...</div>;
  }

  
  return (
    <div>
      <h1> Subjects {id}</h1>
      {files && files.map(file=>(<div key={file.id}>
        <File filename={file.filename} filekey={file.fileurl}  />
        </div>
      ))}
      
    </div>
  ); 
}
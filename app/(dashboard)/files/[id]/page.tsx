import { PrismaClient } from "@prisma/client";
import File from "@/components/file";
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
}
export default async function Filepage({params}: { params: { id: string } }) {
  const files = await getfiles(params.id);
  console.log(files);
  const id = params.id;

  if (!id) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>File {id}</h1>
      <File />
    </div>
  );
}
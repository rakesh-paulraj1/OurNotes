import { NextRequest, NextResponse } from "next/server";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { Prisma, PrismaClient } from "@prisma/client";


const prisma= new PrismaClient()
const s3Client = new S3Client({
  region: process.env.AWS_S3_REGION ?? "",
  credentials: {
    accessKeyId: process.env.AWS_S3_ACCESS_KEY_ID ?? "",
    secretAccessKey: process.env.AWS_S3_SECRET_ACCESS_KEY ?? "",
  },
});

async function uploadFileToS3(file: Buffer, fileName: string) {
  const fileBuffer = file;
 
  const params = {
    Bucket: process.env.AWS_S3_BUCKET_NAME,
    Key: `${fileName}`,
    Body: fileBuffer,
    ContentType: "pdf",
  };
  
  const fileurl = `https://ournotes-rakesh.s3.amazonaws.com/${fileName}`;
  const command = new PutObjectCommand(params);
  await s3Client.send(command);
  return fileurl;
}


export async function POST(request: NextRequest) {
  try {
    const cookies = request.cookies;
    const userid = cookies.get('userId')?.value;
    const formData = await request.formData();
    const file = formData.get("file");
    const subjectname = formData.get("subjectname");
    const departmentId = formData.get("department");
    const filename = formData.get("filename");
  
    if (!file) {  
      return NextResponse.json({ error: "File is required." }, { status: 400 });
    }

    if (!(file instanceof File)) {
      return NextResponse.json(
        { error: "Invalid file format." },
        { status: 400 }
      );
    }
   
    const subject = await prisma.subject.create({
      data: {
        name: subjectname?.toString() ?? "",
        userId: Number(userid),
        departmentId: Number(departmentId),
      },
    });
   if (file && file instanceof File) {
      const buffer = Buffer.from(await file.arrayBuffer());
      const fileUrl = await uploadFileToS3(buffer, file.name);

      
      await prisma.file.create({
          data: {
              filename:filename?.toString()?? "",
              fileurl: fileUrl,
              subjectId: subject.id,
              userid:Number(userid)
          },
      });
  }


    const buffer = Buffer.from(await file.arrayBuffer());
    const fileurl = await uploadFileToS3(buffer, file.name);

    return NextResponse.json({ success: true, fileurl });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "total error" + error });
  }
}

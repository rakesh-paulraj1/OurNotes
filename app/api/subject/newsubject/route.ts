import { NextRequest, NextResponse } from "next/server";

import {  PrismaClient } from "@prisma/client";
import S3 from "aws-sdk/clients/s3";
import { randomUUID } from 'crypto';
const prisma= new PrismaClient()

export const s3client = new S3({
  apiVersion:"2006-03-01",
  region: process.env.AWS_S3_REGION ?? "",
    accessKeyId: process.env.AWS_S3_ACCESS_KEY_ID ?? "",
    secretAccessKey: process.env.AWS_S3_SECRET_ACCESS_KEY ?? "",
    signatureVersion:'v4'
  
});



export async function POST(request: NextRequest) {
  try {
    const cookies = request.cookies;
    const userid = cookies.get('userId')?.value;
    const formData = await request.formData();
    const file = formData.get("file");
    const subjectname = formData.get("subjectname");
    const departmentId = formData.get("department");
    
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

    let uploadUrl;
    let key;

    if (file && file instanceof File) {
      const fileType = file.type; 
      
      const ex = (fileType as string).split("/")[1];
      key = `${randomUUID()}.${ex}`;
      const params = {
        Bucket: process.env.AWS_S3_BUCKET_NAME,
        Key: key,
        Expires: 60,
        ContentType: `pdf`
      };
     
      uploadUrl = await s3client.getSignedUrl("putObject", params);

      await prisma.file.create({
        data: {
          filename: file.name,
          fileurl: key,
          subjectId: subject.id,
          userid: Number(userid)
        },
      });
    }
     
    return NextResponse.json({ uploadUrl, key });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "total error" + error });
  }
}

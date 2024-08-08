import { s3client } from "../../subject/newsubject/route";
import { NextRequest, NextResponse } from "next/server";
import { randomUUID } from "crypto";
import { PrismaClient } from "@prisma/client";

export default async function POST(req: NextRequest) {
    try {
        const formData = await req.formData();
        const prisma = new PrismaClient();
        const file = formData.get("file");
        const userid = Number(formData.get("userid"));
        const subjectid = Number(formData.get("subjectid"));
        const ex = (req.nextUrl.searchParams.get("fileType") as string).split("/")[1];
        const key = `${randomUUID()}.${ex}`;

        if (file && file instanceof File) {
            const params = {
                Bucket: process.env.AWS_S3_BUCKET_NAME,
                Key: key,
                Expires: 60,
                ContentType: `pdf`
            };
            const uploadUrl = await s3client.getSignedUrl("putObject", params);

            await prisma.file.create({
                data: {
                    filename: file.name,
                    fileurl: key,
                    userid: userid,
                    subjectId: subjectid,
                }
            })
            return NextResponse.json({
                uploadUrl,
                Key: key
            }, { status: 200 });
        }
        return NextResponse.json({ error: "No file found." }, { status: 400 });
    } catch (e) {
        console.log(e);
        return NextResponse.json({ error: "Something went wrong." }, { status: 500 });
    }
}
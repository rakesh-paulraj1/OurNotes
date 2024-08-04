import S3 from "aws-sdk/clients/s3";
import { NextApiRequest, NextApiResponse } from "next";
import { randomUUID } from "crypto";

const s3Client = new S3({
    apiVersion:"2006-03-01",
    region: process.env.AWS_S3_REGION ?? "",
      accessKeyId: process.env.AWS_S3_ACCESS_KEY_ID ?? "",
      secretAccessKey: process.env.AWS_S3_SECRET_ACCESS_KEY ?? "",
      signatureVersion:'v4'
    
  });

export default  async function handler(req:NextApiRequest,res:NextApiResponse){
    
    const ex =(req.query.fileType as string).split("/")[1];
    const key=`${randomUUID()}.${ex}`
const params={
    Bucket: process.env.AWS_S3_BUCKET_NAME,
    key,
    Expires:60,
    ContentType:`pdf`
}   
const uploadUrl = await s3Client.getSignedUrl("putObject",params);

res.status(200).json({
uploadUrl,
Key:key
});

}
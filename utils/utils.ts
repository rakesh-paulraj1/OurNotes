import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import S3 from "aws-sdk/clients/s3";
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const s3client = new S3({
  apiVersion:"2006-03-01",
  region: process.env.AWS_S3_REGION ?? "",
    accessKeyId: process.env.AWS_S3_ACCESS_KEY_ID ?? "",
    secretAccessKey: process.env.AWS_S3_SECRET_ACCESS_KEY ?? "",
    signatureVersion:'v4'
  
});
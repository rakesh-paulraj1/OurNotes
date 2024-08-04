import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
export async function GET() {

  const prisma = new PrismaClient();
  const subject = await prisma.subject.findMany(
    {
        include:{
            user:true,
            department:true
          }
    }
  );
  console.log(subject);
  
  return NextResponse.json({subject});
}  
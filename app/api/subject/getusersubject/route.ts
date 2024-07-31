import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
export async function GET(request: NextRequest) {
  const cookies = request.cookies;
  const userid = cookies.get('userId')?.value;
  const prisma = new PrismaClient();
  const subject = await prisma.subject.findMany({
    where: {
      userId: Number(userid),
    },
    include:{
      user:true,
      department:true
    }
  });
  
  return NextResponse.json({subject});
}   
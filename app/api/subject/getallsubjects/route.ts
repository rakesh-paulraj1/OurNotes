import {redis} from '@/lib/redis';
import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
export const runtime ='edge';
export async function GET() {
  const prisma = new PrismaClient();
  const cacheKey='allsubjects';
  const cachedSubjects=await redis.get(cacheKey);
  if(cachedSubjects){
   
    return NextResponse.json({subject:JSON.parse(cachedSubjects)});
  }
  const subject = await prisma.subject.findMany(
    {
        include:{
            user:true,
            department:true
          }
    }
  );
  await redis.set(cacheKey,JSON.stringify(subject)
  );

  
  return NextResponse.json({subject});
}  
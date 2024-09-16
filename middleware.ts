import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(req: any) {
  // Fetching the JWT token
  const token = await getToken({ req, secret: process.env.NEXT_SECRET });

  // Redirect to login if no session is found
  if (!token) {
    return NextResponse.redirect(new URL('/', req.url));
  }

  return NextResponse.next();
}


export const config = {
  matcher: ['/explore', '/dashboard/:path*'], 
};

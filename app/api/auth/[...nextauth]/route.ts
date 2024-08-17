
import NextAuth from 'next-auth/next';
import { authentication } from '@/utils/auth';

export const runtime ='edge';
const handler=NextAuth(authentication);
export {handler as GET,handler as POST}

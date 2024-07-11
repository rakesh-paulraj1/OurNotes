import GoogleProvider  from 'next-auth/providers/google';
import { PrismaClient } from '@prisma/client'

const prisma=new PrismaClient();
export const authentication={
    providers: [
        GoogleProvider({
            clientId:process.env.GOOGLE_CLIENT_ID ||"",
            clientSecret:process.env.GOOGLE_CLIENT_SECRET||"",
            authorization:{
                params:{
                    scope:'https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email'
                }
            }
        })
    ],secret:process.env.NEXT_SECRET||'',
    callbacks:{
        jwt: async ({ user, token }: any) => {
            if (user) {
                token.uid = user.id;
            }
           
            return token;
        },
      session: async({ session, token, }: any) => {
          if (session.user) {
              session.user.id = token.uid
          } 
          
          const existinguser=await prisma.user.findUnique({
            where:{
                email:session.user.email
            }
          })
          if(!existinguser){
            try{
            await prisma.user.create({
              data:{
                name:session.user.name,
                email:session.user.email,
              }
             
            });
            
            
        }catch(e){
             console.log(e+" this is the error");
            }  
          }
         return session 
    },
    
        }
}

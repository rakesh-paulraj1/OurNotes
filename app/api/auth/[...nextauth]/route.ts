import NextAuth from 'next-auth/next';
import  GoogleProvider  from 'next-auth/providers/google';

const handler=NextAuth({
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
      session: ({ session, token, user }: any) => {
          if (session.user) {
              session.user.id = token.uid
          } 
         return session 
    }
}})
export {handler as GET,handler as POST}

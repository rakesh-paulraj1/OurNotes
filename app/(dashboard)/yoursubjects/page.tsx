'use client';

import { signOut, useSession } from 'next-auth/react';


export default function Dashboard() {
const{data:session,status}= useSession();

  return (
     (
      <div>
<button onClick={()=>signOut()}>signout</button>

      </div>
    )
  );
}
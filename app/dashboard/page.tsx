'use client';

import Navbar from '@/components/Navbar';
import { useSession } from 'next-auth/react';


export default function Dashboard() {
const{data:session,status}= useSession();

  return (
     (
      <div>
<Navbar name={session?.user.name} email={session?.user?.email} imagesrc={session?.user?.image} />
      </div>
    )
  );
}
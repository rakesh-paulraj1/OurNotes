'use client';

import { signOut, useSession } from 'next-auth/react';
import { UploadButton } from "../../../utils/uploadthing"

export default function Dashboard() {
const{data:session,status}= useSession();

  return (
     (
      <div>
<button onClick={()=>signOut()}>signout</button>

<main className="flex min-h-screen flex-col items-center justify-between p-24">
      <UploadButton
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
   
          console.log("Files: ", res);
          alert("Upload Completed");
        }}
        onUploadError={(error: Error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
      />
    </main>


      </div>
    )
  );
}
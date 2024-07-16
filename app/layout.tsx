
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/utils/providers";

import { extractRouterConfig } from "uploadthing/server";
import { ourFileRouter } from "./api/uploadThing/core";
const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
<Providers>
      <body className={inter.className}>
      <NextSSRPlugin
          /**
           * The `extractRouterConfig` will extract **only** the route configs
           * from the router to prevent additional information from being
           * leaked to the client. The data passed to the client is the same
           * as if you were to fetch `/api/uploadthing` directly.
           */
          routerConfig={extractRouterConfig(ourFileRouter)}
        />
       
      {children}
      </body>
      </Providers>
      
     
     
    </html>
  );
}

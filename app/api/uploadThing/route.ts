import { ourFileRouter } from "./core";
import { createRouteHandler } from "uploadthing/server";
 

 
export const {  GET,POST } =createRouteHandler({
  router: ourFileRouter,
}); 
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { server } from "./graphql";

const handler = startServerAndCreateNextHandler(server);

export { handler as POST, handler as GET };

import { revalidateTag } from "next/cache";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
    revalidateTag("products")
    return Response.json({ message: "Tag updated" })
}
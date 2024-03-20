
import bcryptjs from "bcryptjs"
import { SignJWT } from "jose"
import { NextRequest } from "next/server";
import { users } from "../users"

export async function POST(req: NextRequest) {

    const { email, password } = await req.json();

    const SECRET_KEY = process.env.JWT_SECRET_KEY

    try {

        const hashedPassword = users[email];

        if (password && hashedPassword && bcryptjs.compareSync(password, hashedPassword)) {


            const token = await new SignJWT({ id: email })
                .setProtectedHeader({ alg: "HS256" })
                .setExpirationTime("1h")
                .sign(new TextEncoder().encode(SECRET_KEY));

            console.log(users);

            return Response.json({
                message: "user logged in",
                token: token,
            },
                {
                    headers: {
                        "set-cookie": `token=${token}; HttpOnly; Path=/; Max-Age=${4 * 60 * 60}; SameSite=Lax`
                    }
                }
            )
        }
        else {
            throw new Error("invalid creds")
        }

    } catch (error: any) {
        console.log(error);
        return Response.json({
            message: error.message,
        })
    }

}
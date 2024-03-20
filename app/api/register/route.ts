import { SignJWT } from "jose"
import { NextRequest } from "next/server";
import { users } from "../users"
import bcrypt from "bcryptjs"

export async function POST(req: NextRequest) {

    const { email, password } = await req.json();

    const SECRET_KEY = process.env.JWT_SECRET_KEY

    try {

        if (email && password) {

            users[email] = await bcrypt.hash(password, 10);
            const token = await new SignJWT({ id: email })
                .setProtectedHeader({ alg: "HS256" })
                .setExpirationTime("1h")
                .sign(new TextEncoder().encode(SECRET_KEY));

            console.log(users);

            return Response.json({
                message: "user registered",
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
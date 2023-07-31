import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { options } from "../../auth/[...nextauth]/options";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getServerSession(req, res, options)

  if (!session) {
    res.status(401).json({ message: "You must be logged in." });
    return;
  }
  if (session.user.role === "ADMIN") {
    try {
        
    } catch (error: any) {
        return new NextResponse(
            JSON.stringify({
                status: "error",
                message: error.message,
            }), {status: 500}
        )
        
    }
    return res.json({
        message: "es admin"
    })
  }

  return NextResponse.json({
    status: "error",
    messsage: "no eres admin",
}, {status: 401})

  
}
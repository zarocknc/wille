import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { options } from "../../auth/[...nextauth]/options";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import addImage from "@/lib/MinIO/addImage";


export async function POST(req: NextApiRequest, res: NextApiResponse) {
    const session = await getServerSession(req, res, options)

    if (!session) {
         return NextResponse.json({
             status: "no estas logueado",
         }, { status: 200 })
    }
    if (session.user.role === "ADMIN") {
        try {
            let imagen: File = req.body.imagen;
            if (imagen) {
                const fileKey = await addImage("imagendepruba", imagen)
                if (fileKey) {
                    return NextResponse.json({
                        status: "success",
                        message: "se a agregado una imagen",
                        fileKey: fileKey,
                    }, { status: 200 })
                }
            }
        } catch (error: any) {
            return new NextResponse(
                JSON.stringify({
                    status: "error",
                    message: error.message
                }), { status: 200 }
            )

        }
        return res.json({
            message: "es admin"
        })
    }

    return NextResponse.json({
        status: "error",
        messsage: "no eres admin",
    }, { status: 200 })
}
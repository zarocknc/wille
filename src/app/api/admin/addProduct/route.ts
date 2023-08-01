import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { options } from "../../auth/[...nextauth]/options";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import addImage from "@/lib/MinIO/addImage";
import { headers } from "next/headers";

interface AddProductRequest extends NextApiRequest {
  body: {
    imagen: File
    title: string
  };
}


export async function POST(req: AddProductRequest, res: Response) {
    const session = await getServerSession(options)
    if (!session) {
         return NextResponse.json({
             status: "no estas logueado",
         }, { status: 200 })
    }
    if (session.user.role === "ADMIN") {
        try {
            let imagen: File = req.body.imagen;
            if (imagen) {
                const fileKey = await addImage("imagendeprueba", imagen)
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
        return NextResponse.json({
            status: "error",
            message: "errorsito"
        },{status: 200})
    }

    return NextResponse.json({
        status: "error",
        messsage: "no eres admin",
    }, { status: 200 })
}
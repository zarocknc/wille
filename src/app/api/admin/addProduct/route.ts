import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { options } from "../../auth/[...nextauth]/options";
import { NextResponse } from "next/server";
import addImage from "@/lib/MinIO/addImage";

export const POST = async (req: Request, res: Response) => {
    const session = await getServerSession(options)
    // if (!session) {
    //      return NextResponse.json({
    //          status: "no estas logueado",
    //      }, { status: 200 })
    // }
    // if (session.user.role === "ADMIN") {
    try {
        const { title, imagen } = await req.json();
        console.log(`se ha recivido title en el servidor: ${title}`)
        const fileKey = await addImage(title, imagen)
        console.log(`este es el fileKey: ${fileKey}`)
        if (fileKey) {
            return NextResponse.json({
                status: "success",
                message: "se a agregado una imagen",
                fileKey: fileKey,
            }, { status: 200 })
        }
    } catch (error: any) {
        console.log(error)
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
    }, { status: 200 })

    // return NextResponse.json({
    //     status: "error",
    //     messsage: "no eres admin",
    // }, { status: 200 })
}
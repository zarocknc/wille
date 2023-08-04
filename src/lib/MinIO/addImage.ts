import prisma from '../prisma';
import { minioClient } from './minioClient';

export default async function addImage(title: String, image: File): Promise<string> {

    if (image) {
        const parts = image.name.split('.');
        const type = parts.length > 1 ? `.${parts.pop()}`: '.jpeg';
        const fileKey: string = `images/${Date.now()}_${title+=type}`;
        const bytes = await image.arrayBuffer();
        const imgBuffer = Buffer.from(bytes);
        minioClient.putObject('productos', fileKey, imgBuffer, async function (error, objInfo) {
            if (error) {
                console.log(error);
                return error;
            }
            console.log("EXITO", objInfo);
            console.log("agregar objectName", fileKey)
            const entry = await prisma.products.create({data:{title: fileKey}})
        });
        return fileKey

    } else {
        return "no hay imagen"
    }

}
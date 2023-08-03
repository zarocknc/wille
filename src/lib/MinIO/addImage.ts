import * as Minio from 'minio';

export default async function addImage(title: String, image: File): Promise<string> {
    const minioClient = new Minio.Client({
        endPoint: 'http://127.0.0.1:9000/',
        port: 9000,
        useSSL: false, //TODO: activar en produccion (extremadamente vulnerable en false)
        accessKey: 'efe54wMLqjgr0Kq6k3gA',
        secretKey: 'C4bSiQFQgYqrwWjYwqe4vDprdGwPmfF8jgEmxbF1'
    });
    if (image) {
        const imageName = image.name;
        const fileKey: string = `images/${Date.now()}_${imageName}`;
        const bytes = await image.arrayBuffer();
        const imgBuffer = Buffer.from(bytes);
        minioClient.putObject('productos', fileKey, imgBuffer, function (error, objInfo) {
            if (error) {
                console.log(error);
                return error;
            }
            console.log("EXITO", objInfo);
            console.log("agregar objectName", fileKey)
        });
        return fileKey

    } else {
        return "no hay imagen"
    }

}